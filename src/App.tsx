import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import ComingSoonPage from "@/pages/ComingSoonPage";
import { ApiQueryClientProvider } from "@/providers/ApiQueryClientProvider";
import "./App.css";
import { navigation } from "@/components/layout/Sidebar";
import NotFoundPage from "@/pages/NotFoundPage";

const implementedPages = ["/", "/settings"];

const comingSoonPageRoutes = navigation
  .filter((nav) => !implementedPages.includes(nav.href))
  .map((nav) => (
    <Route
      key={nav.href}
      path={nav.href}
      element={<ComingSoonPage title={nav.label} />}
    />
  ));

function App() {
  return (
    <ApiQueryClientProvider clearOnUnmount>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {comingSoonPageRoutes}
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </ApiQueryClientProvider>
  );
}

export default App;
