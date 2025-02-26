import { Sidebar } from "@/components/layout/Sidebar";
import type React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-muted">
        <main className="p-4 md:p-6">{title} {children}</main>
      </div>
    </div>
  );
}
