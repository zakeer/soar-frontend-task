import dashboard from "@icons/dashboard.svg";
import transactions from "@icons/transactions.svg";
import accounts from "@icons/accounts.svg";
import investments from "@icons/investments.svg";
import creditCards from "@icons/credit-cards.svg";
import loans from "@icons/loans.svg";
import services from "@icons/services.svg";
import myPrivileges from "@icons/my-privileges.svg";
import settings from "@icons/settings.svg";

export type IconName =
  | "dashboard"
  | "transactions"
  | "accounts"
  | "investments"
  | "creditCards"
  | "loans"
  | "services"
  | "myPrivileges"
  | "settings";

const iconMap: Record<IconName, string> = {
  dashboard,
  transactions,
  accounts,
  investments,
  creditCards,
  loans,
  services,
  myPrivileges,
  settings,
};

const Icon = ({ name }: { name: IconName; isActive?: boolean }) => (
  <img
    className="w-6 h-6"
    src={iconMap[name]}
    alt={name.charAt(0).toUpperCase() + name.slice(1)}
  />
);

export const SidebarIcon = ({ name }: { name: IconName }) => (
  <Icon name={name} />
);
