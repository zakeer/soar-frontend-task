import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import log from "@/common/log";
import { RequestHandler } from "msw";

export async function startMockWorkerIfEnabled() {
  log.warn("[SOAR WARN] Mocking Enabled!");
  const worker = setupWorker(...handlers);

  await worker.start({
    serviceWorker: {
      url: `/mockServiceWorker.js`,
      options: {
        scope: "/",
      },
    },
  });

  worker.listHandlers().forEach((handler) => {
    if (handler instanceof RequestHandler) {
      log.info("[SOAR INFO] Mocker Handler:", handler.info.header);
    }
  });
}

