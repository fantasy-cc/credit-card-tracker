'use server';

import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { BenefitFrequency, BenefitCycleAlignment } from '@/generated/prisma';
import { calculateBenefitCycle } from '@/lib/benefit-cycle';

/**
 * Ensures that BenefitStatus records exist for the current cycle
 * of all active, recurring benefits for the logged-in user.
 * This should be triggered periodically or on user load.
 */
export async function ensureCurrentBenefitStatuses() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    console.log('ensureCurrentBenefitStatuses: No session found.');
    return; // Not logged in
  }
  const userId = session.user.id;
  const now = new Date(); // Use a consistent 'now' for all calculations

  console.log(`ensureCurrentBenefitStatuses: Running for user ${userId} at ${now.toISOString()}`);

  try {
    // Fetch all user cards with their benefits
    const userCardsWithBenefits = await prisma.creditCard.findMany({
      where: { userId: userId },
      include: {
        benefits: true,
      },
    });

    const upsertPromises: Promise<unknown>[] = [];

    // Iterate through cards and their benefits
    userCardsWithBenefits.forEach(card => {
      card.benefits.forEach(benefit => {
        // Skip ONE_TIME benefits as they don't have recurring cycles
        if (benefit.frequency === BenefitFrequency.ONE_TIME) return;

        // For CARD_ANNIVERSARY alignment, YEARLY benefits require an openedDate.
        // CALENDAR_FIXED benefits do not strictly need it for their cycle calculation but it's good to be aware.
        const cardOpenedDateForCalc: Date | null = card.openedDate;
        if (
          benefit.cycleAlignment !== BenefitCycleAlignment.CALENDAR_FIXED && // only check for non-fixed alignment
          benefit.frequency === BenefitFrequency.YEARLY && 
          !card.openedDate
        ) {
             console.warn(`Skipping YEARLY (anniversary based) benefit cycle for ${benefit.id} as card ${card.id} has no openedDate.`);
             return; 
        }

        // Calculate the expected dates for the *current* cycle based on 'now'
        try {
          const { cycleStartDate, cycleEndDate } = calculateBenefitCycle(
            benefit.frequency,
            now, // Reference date is now
            cardOpenedDateForCalc,
            benefit.cycleAlignment, // Pass new field
            benefit.fixedCycleStartMonth, // Pass new field
            benefit.fixedCycleDurationMonths // Pass new field
          );

          // Optional: Add a check to avoid creating statuses for cycles that ended long ago?
          // const bufferDays = 30; // e.g., don't create if cycle ended more than 30 days ago
          // const cutoffDate = new Date(now.getTime() - bufferDays * 24 * 60 * 60 * 1000);
          // if (cycleEndDate < cutoffDate) {
          //   return;
          // }

          // Upsert the status: Create if not exists for this cycle start date
          upsertPromises.push(
            prisma.benefitStatus.upsert({
              where: {
                benefitId_userId_cycleStartDate: {
                  benefitId: benefit.id,
                  userId: userId,
                  cycleStartDate: cycleStartDate,
                }
              },
              update: {
                // Ensure end date is updated if calculation logic changes between runs
                cycleEndDate: cycleEndDate,
              },
              create: {
                benefitId: benefit.id,
                userId: userId,
                cycleStartDate: cycleStartDate,
                cycleEndDate: cycleEndDate,
                isCompleted: false, // New cycles start as not completed
              },
            })
          );
        } catch (error) { // Explicitly type error if possible, otherwise use unknown or any
            // Add type check for error if necessary, e.g., if (error instanceof Error)
            console.error(`Error calculating cycle for benefit ${benefit.id}:`, error instanceof Error ? error.message : error);
            // Continue with other benefits
        }

      });
    });

    // Execute all upsert operations
    if (upsertPromises.length > 0) {
        console.log(`ensureCurrentBenefitStatuses: Attempting ${upsertPromises.length} upserts.`);
        await Promise.all(upsertPromises);
        console.log('ensureCurrentBenefitStatuses: Upserts completed.');
        // Remove revalidation from here - it should happen in actions that *trigger* changes
        // revalidatePath('/benefits'); 
    } else {
        console.log('ensureCurrentBenefitStatuses: No benefit statuses needed upserting.');
    }

  } catch (error) {
    console.error('ensureCurrentBenefitStatuses: Failed to ensure benefit statuses:', error instanceof Error ? error.message : error);
    // Decide if this error should be surfaced to the user or just logged
  }
}