import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { useCards } from "@/lib/api/queries"
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CreditCard } from "./CreditCard";
import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export const mockCards: Card[] = [
  {
    id: "1",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    type: "dark",
  },
  {
    id: "2",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    type: "light",
  },
];

function useCards() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData(mockCards);
    }, 5000 * 0);
  }, []);

  return {
    isLoading,
    data,
    error: null,
  };
}

function CardList() {
  const { data: cards, isLoading, error } = useCards();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-58 w-full" />
        <Skeleton className="h-58 w-full" />
      </div>
    );
  }

  if (error) {
    return <div className="text-destructive">Failed to load cards</div>;
  }

  return (
    <ScrollArea className="w-full">
      <div className="flex flex-col md:flex-row gap-6">
        {cards?.map((card: Card) => (
          <CreditCard key={card.id} {...card} className="flex-1" />
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="md:hidden" />
    </ScrollArea>
  );
}

export function MyCards() {
  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-between items-center">
        <Typography variant="h4" className="text-primary">
          My Cards
        </Typography>

        <Button variant="link">
          <Typography>See All</Typography>
        </Button>
      </header>
      <CardList />
    </div>
  );
}
