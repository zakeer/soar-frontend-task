import { NavLink } from "react-router-dom";
import { IconName, SidebarIcon } from "@/components/layout/sidebar-icons";
import soarIcon from "@icons/soar.svg";

type NavigationType = {
  icon: IconName;
  href: string;
  label: string;
};

const navigation: NavigationType[] = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "transactions", label: "Transactions", href: "/transactions" },
  { icon: "accounts", label: "Accounts", href: "/accounts" },
  { icon: "investments", label: "Investments", href: "/investments" },
  { icon: "creditCards", label: "Credit Cards", href: "/cards" },
  { icon: "loans", label: "Loans", href: "/loans" },
  { icon: "services", label: "Services", href: "/services" },
  { icon: "myPrivileges", label: "My Privileges", href: "/privileges" },
  { icon: "settings", label: "Setting", href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="w-64 h-full border-r border-gray-200  bg-card">
      <div className="flex items-center gap-2 text-xl font-extrabold text-primary px-8 py-6">
        <img src={soarIcon} alt="Soar Task" />
        Soar Task
      </div>

      <nav className="py-4">
        {navigation.map((item) => {
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `relative w-full flex justify-start gap-6 py-4 px-8 hover:opacity-100 ${
                  isActive ? "" : "opacity-45"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="w-2 h-full absolute left-0 top-0 bg-gray-900 rounded-r-xl" />
                  )}
                  <SidebarIcon name={item.icon} />
                  {item.label}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
