import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block h-screen overflow-hidden sticky top-0">
        <Sidebar />
      </div>

      <div className="flex-1 bg-muted">
        {/* Mobile Sidebar */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <Header
            title={title}
            menuTrigger={
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            }
          />
          <SheetContent side="left" className="w-64 p-0 h-full bg-card border-r border-gray-200">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
