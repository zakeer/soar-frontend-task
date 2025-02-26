import type React from "react";
import { Bell, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  menuTrigger?: React.ReactNode;
}

const UserAvatar = ({ src, alt }: { src: string; alt: string }) => (
  <Avatar className="h-10 w-10">
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>AC</AvatarFallback>
  </Avatar>
);

const SearchInput = () => (
  <div className="relative ">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60" />
    <Input
      className="rounded-4xl bg-muted border-0 pl-9 shadow-0 text-primary/80 placeholder:text-primary/40"
      placeholder="Search for something"
    />
  </div>
);

// Functional component for action buttons
const ActionButton = ({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}) => (
  <Button
    variant="ghost"
    size="icon"
    className="group relative text-primary/60 hover:text-secondary hover:bg-muted bg-muted rounded-full cursor-pointer"
    onClick={onClick}
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </Button>
);

export function Header({ title, menuTrigger }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-gray-200 bg-card px-4 md:px-6">
      <div className="flex items-center gap-4">
        {menuTrigger}
        <h1 className="text-2xl font-semibold text-[#343c6a]">{title}</h1>
      </div>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-6 md:flex">
        <SearchInput />
        <div className="flex items-center gap-4">
          <ActionButton icon={Settings} label="Settings" />
          <ActionButton icon={Bell} label="Notifications" />
          <UserAvatar
            src="https://avatar.iran.liara.run/public"
            alt="Profile"
          />
        </div>
      </div>

      {/* Mobile Profile */}
      <div className="md:hidden">
        <UserAvatar src="https://avatar.iran.liara.run/public" alt="Profile" />
      </div>
    </header>
  );
}
