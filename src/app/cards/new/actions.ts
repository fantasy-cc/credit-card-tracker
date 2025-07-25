'use server';

// import { prisma } from '@/lib/prisma'; // Removed unused import
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
// import { calculateBenefitCycle, calculateOneTimeBenefitLifetime } from '@/lib/benefit-cycle'; // Removed unused imports
// import { BenefitFrequency, BenefitCycleAlignment } from '@/generated/prisma'; // Also remove this as it's not used after refactor
import { createCardForUser } from '@/lib/actions/cardUtils';

export async function addCardAction(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/api/auth/signin?callbackUrl=/cards/new');
  }
  const userId = session.user.id;

  const predefinedCardId = formData.get('predefinedCardId') as string;
  const openedMonthString = formData.get('openedMonth') as string | null;
  const openedYearString = formData.get('openedYear') as string | null;
  const lastFourDigits = formData.get('lastFourDigits') as string | null;

  if (!predefinedCardId) {
    throw new Error('Predefined card ID is missing.');
  }

  let openedDate: Date | null = null;
  if (openedMonthString && openedYearString) {
    const month = parseInt(openedMonthString, 10);
    const year = parseInt(openedYearString, 10);
    if (!isNaN(month) && month >= 1 && month <= 12 && !isNaN(year)) {
      openedDate = new Date(Date.UTC(year, month - 1, 1));
    } else {
      throw new Error('Invalid month or year provided.');
    }
  } else if (openedMonthString || openedYearString) {
    throw new Error('Please provide both month and year or leave both blank.');
  }

  // Validate last 4 digits if provided
  if (lastFourDigits && (lastFourDigits.length !== 4 || !/^\d{4}$/.test(lastFourDigits))) {
    throw new Error('Last 4 digits must be exactly 4 numeric digits.');
  }



  try {
    const result = await createCardForUser(userId, predefinedCardId, openedDate, lastFourDigits);

    if (!result.success) {
      throw new Error(result.message || 'Failed to add card in helper function.');
    }



    revalidatePath('/');
    revalidatePath('/cards');
    revalidatePath('/benefits');

  } catch (error) {
    console.error('addCardAction error:', error instanceof Error ? error.message : error);
    if (error instanceof Error) {
      throw new Error(`Failed to add card: ${error.message}`);
    } else {
        throw new Error('An unknown error occurred while adding the card.');
    }
  }


  redirect('/benefits');
} 