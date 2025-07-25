import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';
import { BenefitStatus, User, Benefit, CreditCard, LoyaltyAccount, LoyaltyProgram } from '@/generated/prisma';

// Extend Prisma types to ensure relations are included for type safety
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserWithNotificationPrefs extends User {}
interface BenefitStatusWithDetails extends BenefitStatus {
  benefit: Benefit & { creditCard: CreditCard };
  user: UserWithNotificationPrefs;
}
interface LoyaltyAccountWithDetails extends LoyaltyAccount {
  loyaltyProgram: LoyaltyProgram;
}

// Shared core logic for sending notifications
async function runSendNotificationsLogic(requestUrlForMockDate?: string) {
  let today = new Date();
  if (requestUrlForMockDate) {
    const { searchParams } = new URL(requestUrlForMockDate);
    const mockDateString = searchParams.get('mockDate');
    if (process.env.NODE_ENV !== 'production' && mockDateString) {
      const parsedMockDate = new Date(mockDateString);
      if (!isNaN(parsedMockDate.getTime())) {
        today = parsedMockDate;
        console.log(`Core send-notifications logic: Using mock date: ${today.toISOString()}`);
      } else {
        console.warn(`Core send-notifications logic: Invalid mockDate format received: ${mockDateString}. Using current date.`);
      }
    }
  }

  today.setUTCHours(0, 0, 0, 0);
  console.log(`Core send-notifications logic started for date: ${today.toISOString()}`);

  let emailsSent = 0;
  let usersProcessed = 0;

  try {
    const usersToNotify = await prisma.user.findMany({
      where: {
        AND: [
          {
            OR: [
              { notifyNewBenefit: true },
              { notifyBenefitExpiration: true },
              { notifyPointsExpiration: true },
            ],
          },
          {
            email: { contains: '@' }
          },
        ],
      },
      select: {
        id: true,
        email: true,
        name: true,
        notifyNewBenefit: true,
        notifyBenefitExpiration: true,
        notifyExpirationDays: true,
        notifyPointsExpiration: true,
        pointsExpirationDays: true,
      },
    });

    usersProcessed = usersToNotify.length;
    if (usersProcessed === 0) {
      console.log('Core logic: No users with notification preferences enabled.');
      return NextResponse.json({ message: 'No users to notify.' }, { status: 200 });
    }

    for (const user of usersToNotify) {
      if (!user.email) continue; 

      const newBenefitCyclesToNotify: BenefitStatusWithDetails[] = [];
      const expiringBenefitsToNotify: BenefitStatusWithDetails[] = [];
      const expiringLoyaltyAccountsToNotify: LoyaltyAccountWithDetails[] = [];

      if (user.notifyNewBenefit) {
        const newBenefitStatuses = await prisma.benefitStatus.findMany({
          where: {
            userId: user.id,
            isCompleted: false,
            cycleStartDate: { 
              gte: today, 
              lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) 
            }
          },
          include: {
            benefit: { include: { creditCard: true } },
            user: true 
          },
        }) as BenefitStatusWithDetails[];
        newBenefitCyclesToNotify.push(...newBenefitStatuses);
      }

      if (user.notifyBenefitExpiration && user.notifyExpirationDays && user.notifyExpirationDays > 0) {
        const reminderDate = new Date(today);
        reminderDate.setDate(today.getDate() + user.notifyExpirationDays);
        const reminderDateStart = new Date(reminderDate);
        reminderDateStart.setUTCHours(0,0,0,0);
        const reminderDateEnd = new Date(reminderDate);
        reminderDateEnd.setUTCHours(23,59,59,999);

        const expiringStatuses = await prisma.benefitStatus.findMany({
          where: {
            userId: user.id,
            isCompleted: false,
            cycleEndDate: { 
              gte: reminderDateStart, 
              lte: reminderDateEnd
            }
          },
          include: {
            benefit: { include: { creditCard: true } },
            user: true
          },
        }) as BenefitStatusWithDetails[];
        expiringBenefitsToNotify.push(...expiringStatuses);
      }

      // Check for expiring loyalty program points
      if (user.notifyPointsExpiration && user.pointsExpirationDays && user.pointsExpirationDays > 0) {
        const loyaltyReminderDate = new Date(today);
        loyaltyReminderDate.setDate(today.getDate() + user.pointsExpirationDays);
        const loyaltyReminderDateStart = new Date(loyaltyReminderDate);
        loyaltyReminderDateStart.setUTCHours(0,0,0,0);
        const loyaltyReminderDateEnd = new Date(loyaltyReminderDate);
        loyaltyReminderDateEnd.setUTCHours(23,59,59,999);

        const expiringLoyaltyAccounts = await prisma.loyaltyAccount.findMany({
          where: {
            userId: user.id,
            isActive: true,
            expirationDate: {
              not: null, // Only accounts with expiration dates
              gte: loyaltyReminderDateStart,
              lte: loyaltyReminderDateEnd
            }
          },
          include: {
            loyaltyProgram: true
          },
        }) as LoyaltyAccountWithDetails[];
        expiringLoyaltyAccountsToNotify.push(...expiringLoyaltyAccounts);
      }

      if (newBenefitCyclesToNotify.length > 0) {
        const subject = "Your New Benefit Cycles Have Started!";
        const benefitsListHtml = newBenefitCyclesToNotify.map(status => 
          `<li>
             <strong>${status.benefit.description}</strong> on your ${status.benefit.creditCard.name} card.
             Cycle: ${status.cycleStartDate.toLocaleDateString('en-US', { timeZone: 'UTC' })} - ${status.cycleEndDate.toLocaleDateString('en-US', { timeZone: 'UTC' })}.
           </li>`
        ).join('');

        const htmlBody = `
          <h1>New Benefit Cycles!</h1>
          <p>Hi ${user.name || 'there'},</p>
          <p>The following new benefit cycles have started for you:</p>
          <ul>${benefitsListHtml}</ul>
          <p>Make sure to use them!</p>
          <a href="${process.env.NEXTAUTH_URL}/benefits">View Your Benefits</a>
        `;
        const success = await sendEmail({ to: user.email, subject, html: htmlBody });
        if (success) {
          emailsSent++;
        } else {
          console.warn(`Failed to send '${subject}' email to ${user.email}. sendEmail returned false.`);
        }
      }

      if (expiringBenefitsToNotify.length > 0) {
        const subject = "Benefit Expiration Reminders";
        const benefitsListHtml = expiringBenefitsToNotify.map(status => 
          `<li>
             <strong>${status.benefit.description}</strong> on your ${status.benefit.creditCard.name} card,
             expiring on ${status.cycleEndDate.toLocaleDateString('en-US', { timeZone: 'UTC' })} (in ${user.notifyExpirationDays} day(s)).
           </li>`
        ).join('');
        
        const htmlBody = `
          <h1>Benefits Expiring Soon!</h1>
          <p>Hi ${user.name || 'there'},</p>
          <p>The following benefits are expiring soon for you:</p>
          <ul>${benefitsListHtml}</ul>
          <p>Don\'t miss out!</p>
          <a href="${process.env.NEXTAUTH_URL}/benefits">View Your Benefits</a>
        `;
        const success = await sendEmail({ to: user.email, subject, html: htmlBody });
        if (success) {
          emailsSent++;
        } else {
          console.warn(`Failed to send '${subject}' email to ${user.email}. sendEmail returned false.`);
        }
      }

      if (expiringLoyaltyAccountsToNotify.length > 0) {
        const subject = "Loyalty Points Expiring Soon!";
        const loyaltyListHtml = expiringLoyaltyAccountsToNotify.map(account => {
          const expirationDateStr = account.expirationDate 
            ? account.expirationDate.toLocaleDateString('en-US', { timeZone: 'UTC' })
            : 'Unknown';
          return `<li>
             <strong>${account.loyaltyProgram.displayName}</strong> points
             expiring on ${expirationDateStr} (in ${user.pointsExpirationDays} day(s)).
             ${account.accountNumber ? `Account: ${account.accountNumber}` : ''}
           </li>`;
        }).join('');
        
        const htmlBody = `
          <h1>Loyalty Points Expiring Soon!</h1>
          <p>Hi ${user.name || 'there'},</p>
          <p>The following loyalty program points are expiring soon:</p>
          <ul>${loyaltyListHtml}</ul>
          <p>Consider earning or redeeming points to prevent expiration!</p>
          <a href="${process.env.NEXTAUTH_URL}/loyalty">Manage Your Loyalty Accounts</a>
        `;
        const success = await sendEmail({ to: user.email, subject, html: htmlBody });
        if (success) {
          emailsSent++;
        } else {
          console.warn(`Failed to send '${subject}' email to ${user.email}. sendEmail returned false.`);
        }
      }
    }

    console.log(`Core logic: Processed ${usersProcessed} users. Sent ${emailsSent} emails.`);
    return NextResponse.json({ message: 'Notification cron job executed.', usersProcessed, emailsSent }, { status: 200 });

  } catch (error) {
    console.error('Core send-notifications logic failed:', error);
    return NextResponse.json({ message: 'Error executing cron job.' }, { status: 500 });
  }
}

// GET handler for Vercel Cron (defaults to GET)
export async function GET(request: Request) {
  const authorizationHeader = request.headers.get('authorization');
  const expectedSecret = process.env.CRON_SECRET;

  console.log(`send-notifications GET: Received authorization header: "${authorizationHeader}"`);
  console.log(`send-notifications GET: Expected CRON_SECRET from env: "${expectedSecret}"`);

  if (!expectedSecret) {
    console.error('CRON_SECRET is not set for GET handler.');
    return NextResponse.json({ message: 'Cron secret not configured.' }, { status: 500 });
  }

  if (authorizationHeader !== `Bearer ${expectedSecret}`) {
    console.warn('Unauthorized GET cron job attempt for send-notifications.');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  console.log("Authorized GET request for send-notifications. Running core logic...");
  return await runSendNotificationsLogic(request.url); // Pass request.url for mockDate handling
}

// POST handler for manual trigger or other services
export async function POST(request: Request) {
  const authorizationHeader = request.headers.get('authorization');
  const expectedSecret = process.env.CRON_SECRET;

  console.log(`send-notifications POST: Received authorization header: "${authorizationHeader}"`);
  console.log(`send-notifications POST: Expected CRON_SECRET from env: "${expectedSecret}"`);

  if (!expectedSecret) {
    console.error('CRON_SECRET is not set for POST handler.');
    return NextResponse.json({ message: 'Cron secret not configured.' }, { status: 500 });
  }

  if (authorizationHeader !== `Bearer ${expectedSecret}`) {
    console.warn('Unauthorized POST cron job attempt for send-notifications.');
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  console.log("Authorized POST request for send-notifications. Running core logic...");
  return await runSendNotificationsLogic(request.url); // Pass request.url for mockDate handling
}