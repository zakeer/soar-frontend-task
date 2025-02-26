import { AppConfig } from "@/config/app-config";

class Logger {
  isLoggingEnabled = AppConfig.IS_LOGGING_ENABLED;

  enableLogs() {
    this.isLoggingEnabled = true;
  }

  log(...args: unknown[]) {
    if (this.isLoggingEnabled) {
      console.log("soar:", ...args);
    }
  }

  info(...args: unknown[]) {
    if (this.isLoggingEnabled) {
      console.info("soar:", ...args);
    }
  }

  warn(...args: unknown[]) {
    console.warn("soar:", ...args);
  }

  error(...args: unknown[]) {
    console.error("soar:", ...args);
  }

  time(label: string) {
    console.time(`soar:${label}`);
  }

  timeEnd(label: string) {
    console.timeEnd(`soar:${label}`);
  }

  debug(...args: unknown[]) {
    if (this.isLoggingEnabled) {
      console.debug("soar:", ...args);
    }
  }
}

const log = new Logger();
export default log;
