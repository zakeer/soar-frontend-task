import React, { useCallback, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useQuickTransferMutation,
  useTransferContacts,
} from "@/features/transfer/query/transfer.queries";
import PaperPlaneIcon from "@/components/icons/PaperPlane";
import { toast } from "react-toastify";
import { Contact } from "@/features/transfer/transfer.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [amount, setAmount] = useState("");

  const handleAmountInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      if (!isNaN(+value)) {
        setAmount(value);
      }
    },
    []
  );

  const transferMutation = useQuickTransferMutation();

  const handleTransfer = () => {
    if (!selectedContact) return;

    const toastId = toast.info("Transfer in progress...", {
      autoClose: false,
      closeButton: false,
    });

    transferMutation.mutate(
      {
        amount: Number.parseFloat(amount),
        recipientId: selectedContact.id,
        recipient: selectedContact.name,
      },
      {
        onSuccess: () => {
          toast.update(toastId, {
            render: "Transfer successful!",
            autoClose: 5000,
          });
        },
        onError: () => {
          toast.update(toastId, {
            render: "Transfer failed. Please try again.",
            autoClose: 5000,
          });
        },
      }
    );
  };

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
      {/* <ScrollArea className="w-full"> */}
      <Carousel className="w-full">
        <CarouselContent className="relative">
          {data?.contacts.map((contact) => (
            <CarouselItem className="basis-1/3 flex justify-center">
              <ContactCard
                key={contact.id}
                {...contact}
                isSelected={selectedContact?.id === contact.id}
                onClick={() => setSelectedContact(contact)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious hideOnDisabled />
        <CarouselNext hideOnDisabled />
      </Carousel>
      {/* <ScrollBar orientation="horizontal" /> */}
      {/* </ScrollArea> */}

      <div className="flex flex-row gap-2 md:gap-4 items-center">
        <Typography className="text-secondary">Write Amount</Typography>
        <div className="flex flex-1 max-w-md ml-auto gap-1 lg:gap-3 bg-primary/10 rounded-4xl overflow-hidden">
          <Input
            value={amount}
            onChange={handleAmountInputChange}
            className="bg-transparent shadow-none border-0 text-[#718EBF] placeholder:text-[#718EBF] p-4 md:p-5"
            placeholder="525.00"
          />
          <Button
            variant="dark"
            className="rounded-full flex gap-2 items-center h-auto w-26 md:w-34 shrink-0 text-md font-normal py-3"
            disabled={!selectedContact || transferMutation.isPending || !amount}
            onClick={handleTransfer}
          >
            Send
            <PaperPlaneIcon className="size-5 lg:size-7 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function QuickTransfer() {
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
