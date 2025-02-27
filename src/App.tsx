import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ApiQueryClientProvider } from "@/providers/ApiQueryClientProvider";
import "./App.css";
import { navigation } from "@/components/layout/Sidebar";
import { Spinner } from "@/components/ui/spinner";

// Lazy load pages
const Dashboard = React.lazy(() => import("@/pages/dashboard/DashboardPage"));
const Settings = React.lazy(() => import("@/pages/settings/SettingsPage"));
const ComingSoon = React.lazy(() => import("@/pages/ComingSoonPage"));
const NotFound = React.lazy(() => import("@/pages/NotFoundPage"));

const implementedPages = ["/", "/settings"];

const comingSoonPageRoutes = navigation
  .filter((nav) => !implementedPages.includes(nav.href))
  .map((nav) => (
    <Route
      key={nav.href}
      path={nav.href}
      element={<ComingSoon title={nav.label} />}
    />
  ));

function App() {
  return (
    <ApiQueryClientProvider clearOnUnmount>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            {comingSoonPageRoutes}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </ApiQueryClientProvider>
  );
}

export default App;
