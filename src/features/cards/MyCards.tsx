import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CreditCard } from "./CreditCard";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useCards } from "@/features/cards/query/cards.queries";
import log from "@/common/log";
import { toast } from "react-toastify";

function CardList() {
  const { data: cards, isLoading, error } = useCards();
  log.info({ cards });

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
      <div className="flex flex-row gap-6">
        {cards?.map((card: Card) => (
          <CreditCard key={card.id} {...card} className="flex-1 shrink-0" />
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="md:hidden" />
    </ScrollArea>
  );
}

export function MyCards() {
  const handleSeeAllClick = () =>
    toast.info("My Cards Page implementation is in progress");

  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-between items-center">
        <Typography variant="h4" className="text-primary">
          My Cards
        </Typography>

        <Button variant="link" onClick={handleSeeAllClick}>
          <Typography>See All</Typography>
        </Button>
      </header>
      <CardList />
    </div>
  );
}
