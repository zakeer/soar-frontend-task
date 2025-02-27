import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import { ApiQueryClientProvider } from "@/providers/ApiQueryClientProvider";
import "./App.css";

function App() {
  return (
    <ApiQueryClientProvider clearOnUnmount>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </ApiQueryClientProvider>
  );
}

export default App;
