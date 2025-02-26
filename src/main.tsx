import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { enableMockServerIfEnabled } from "@/mocks/mock-server.ts";

const container = document.getElementById("root") as Element;
const root = createRoot(container!);

async function bootstrapApp() {
  await enableMockServerIfEnabled();
  root.render(<App />);
}

bootstrapApp();
