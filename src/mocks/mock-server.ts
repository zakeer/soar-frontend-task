import { AppConfig } from "@/config/app-config";

// Mock server is only enabled in development environment, and not bundled in production
export async function enableMockServerIfEnabled() {
  if (AppConfig.IS_DEV_ENV || AppConfig.IS_MOCK_ENABLED) {
    const { startMockWorkerIfEnabled } = await import("./browser");
    await startMockWorkerIfEnabled();
  }
}
