import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useTransferContacts } from "@/features/transfer/query/transfer.queries";
import PaperPlaneIcon from "@/components/icons/PaperPlane";

function ContactCard({
  image,
  name,
  role,
  isSelected,
  onClick,
}: {
  image: string;
  name: string;
  role: string;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-4 rounded-xl transition-colors hover:bg-muted"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h5
        className={`text-primary whitespace-nowrap ${
          isSelected ? "font-bold" : "font-light"
        }`}
      >
        {name}
      </h5>
      <p
        className={`text-secondary text-sm ${
          isSelected ? "font-bold" : "font-light"
        }`}
      >
        {role}
      </p>
    </button>
  );
}

function TransferSection() {
  const { data, isLoading } = useTransferContacts();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [amount, setAmount] = useState("525.50");

  if (isLoading) {
    return (
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="w-24 h-32" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-4">
          {data?.contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              {...contact}
              isSelected={selectedContact === contact.id}
              onClick={() => setSelectedContact(contact.id)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Typography className="text-secondary">Write Amount</Typography>
        <div className="flex flex-1 gap-1 lg:gap-3 bg-primary/10 rounded-4xl overflow-hidden items-center">
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent shadow-none border-0 text-[#718EBF] placeholder:text-[#718EBF] p-4 md:p-5"
            placeholder="Write Amount"
          />
          <Button
            variant="dark"
            className="rounded-full flex gap-2 items-center h-full w-28 md:w-34 shrink-0 text-md font-normal py-3"
            disabled={!selectedContact}
          >
            Send
            <PaperPlaneIcon className="size-5 lg:size-7 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function QuickTransfer() {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h4" className="text-primary h-9 flex items-center">
        Quick Transfer
      </Typography>
      <Card>
        <CardContent>
          <TransferSection />
        </CardContent>
      </Card>
    </div>
  );
}
