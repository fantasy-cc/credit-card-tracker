import React from 'react'; // useTransition will be in the client component
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { BenefitStatus, Benefit, CreditCard as PrismaCreditCard } from '@/generated/prisma';
import BenefitsDisplayClient from '@/components/BenefitsDisplayClient'; // Import the new client component
import { createCardDisplayNameMap } from '@/lib/cardDisplayUtils';
// We will create a new client component for the list and cards
// import BenefitListClient from '@/components/BenefitListClient'; 

// Type for CreditCard that includes its displayName
interface CreditCardWithDisplayName extends PrismaCreditCard {
  displayName: string;
  // If FetchedUserCard from cards/page.tsx includes benefits on the card itself, ensure consistency or map as needed
  // For this page, benefits come via BenefitStatus -> Benefit -> CreditCard, so card.benefits isn't directly on the card here
}

// Updated Type combining BenefitStatus with Benefit and Card details (with displayName) for display
export interface DisplayBenefitStatus extends BenefitStatus { // Export for use in client component
  benefit: Benefit & { creditCard: CreditCardWithDisplayName };
  usageWaySlug?: string | null; // Add optional usage way slug
}

export default async function BenefitsDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect('/api/auth/signin?callbackUrl=/benefits');
  }
  const userId = session.user.id;
  const now = new Date(); // Revert to actual system time

  // 1. Fetch all user's cards to determine display names
  const userCards = await prisma.creditCard.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      issuer: true,
      lastFourDigits: true, // Include lastFourDigits for display name generation
      nickname: true, // Include nickname for display name generation
      createdAt: true,
      updatedAt: true,
      userId: true,
      cardNumber: true,
      expiryDate: true,
      openedDate: true,
    },
  });

  // 2. Fetch all usage ways to match with benefits
  const usageWays = await prisma.benefitUsageWay.findMany({
    include: {
      predefinedBenefits: {
        select: {
          category: true,
          description: true,
        },
      },
    },
  });

  // Create a map from benefit description/category to usage way slug
  const usageWayMap = new Map<string, string>();
  usageWays.forEach((way) => {
    way.predefinedBenefits.forEach((benefit) => {
      const key = `${benefit.category}:${benefit.description}`;
      usageWayMap.set(key, way.slug);
    });
  });

  // 3. Calculate displayNames for each card using the utility function
  const cardDisplayNameMap = createCardDisplayNameMap(userCards);

  // Fetch All Relevant Benefit Statuses for Display
  const allStatusesRaw = await prisma.benefitStatus.findMany({
    where: {
      userId: userId,
    },
    include: {
      benefit: {
        include: {
          creditCard: true, 
        },
      },
    },
    orderBy: [
      {
        orderIndex: 'asc', // Primary sort by user's preferred order
      },
      {
        cycleEndDate: 'asc', // Secondary sort by cycle end date
      },
    ],
  });

  // Calculate total annual fees for user's cards (same logic as dashboard)
  const userCardsForFees = await prisma.creditCard.findMany({
    where: { userId },
    select: { name: true }
  });

  // Count the quantity of each card type for annual fee calculation
  const cardCountsForFees = userCardsForFees.reduce((acc, card) => {
    acc[card.name] = (acc[card.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalAnnualFees = await prisma.predefinedCard.findMany({
      where: {
        name: {
        in: Object.keys(cardCountsForFees)
        }
      }
    }).then(predefinedCards => {
    return predefinedCards.reduce((total, card) => {
      const quantity = cardCountsForFees[card.name] || 1;
      return total + (card.annualFee * quantity);
    }, 0);
  });

  // 4. Augment statuses with card displayName and usage way slug
  const allStatusesAugmented: DisplayBenefitStatus[] = allStatusesRaw.map(status => {
    const cardOriginal = status.benefit.creditCard;
    const resolvedDisplayName = cardDisplayNameMap.get(cardOriginal.id) || cardOriginal.name;
    
    // Look up usage way for this benefit
    const benefitKey = `${status.benefit.category}:${status.benefit.description}`;
    const usageWaySlug = usageWayMap.get(benefitKey) || null;
    
    return {
      ...status,
      benefit: {
        ...status.benefit,
        creditCard: {
          ...cardOriginal,
          displayName: resolvedDisplayName,
        },
      },
      usageWaySlug,
    };
  });

  // Filter for statuses whose cycle has actually started
  const activeOrPastCycleStatuses = allStatusesAugmented.filter(status => {
    // Ensure cycleStartDate is treated as a Date object for comparison
    const cycleStartDate = new Date(status.cycleStartDate);
    return cycleStartDate <= now;
  });

  // Separate benefits into categories
  const upcomingBenefits = activeOrPastCycleStatuses.filter(status => {
    const cycleStartDate = new Date(status.cycleStartDate);
    const cycleEndDate = new Date(status.cycleEndDate);
    return !status.isCompleted && !status.isNotUsable && cycleStartDate <= now && now <= cycleEndDate;
  });

  const completedBenefits = activeOrPastCycleStatuses.filter(status => status.isCompleted);

  const notUsableBenefits = activeOrPastCycleStatuses.filter(status => status.isNotUsable);

  // Calculate total values based on filtered, active/past cycle statuses
  const totalUnusedValue = upcomingBenefits.reduce((sum, status) => {
    return sum + (status.benefit.maxAmount || 0);
  }, 0);

  const totalUsedValue = completedBenefits.reduce((sum, status) => {
    return sum + (status.benefit.maxAmount || 0);
  }, 0);

  const totalNotUsableValue = notUsableBenefits.reduce((sum, status) => {
    return sum + (status.benefit.maxAmount || 0);
  }, 0);

  // --- Render Component --- 
  return (
    <BenefitsDisplayClient
      upcomingBenefits={upcomingBenefits}
      completedBenefits={completedBenefits}
      notUsableBenefits={notUsableBenefits}
      totalUnusedValue={totalUnusedValue}
      totalUsedValue={totalUsedValue}
      totalNotUsableValue={totalNotUsableValue}
      totalAnnualFees={totalAnnualFees}
    />
  );
}

// --- BenefitCard will be moved to BenefitCardClient.tsx --- 