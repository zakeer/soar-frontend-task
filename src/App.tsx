import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import { ApiQueryClientProvider } from "@/providers/ApiQueryClientProvider";

function App() {
  return (
    <ApiQueryClientProvider clearOnUnmount>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </ApiQueryClientProvider>
  );
}

export default App;
