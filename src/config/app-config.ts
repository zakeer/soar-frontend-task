/**
 *
 * returns if the logging should be enabled
 */
function isLoggingEnabled() {
  return localStorage.getItem("soar_isLoggingEnabled") === "true";
}

export const AppConfig = {
  IS_DEV_ENV: process.env.NODE_ENV === "development",
  IS_LOGGING_ENABLED:
    process.env.NODE_ENV === "development" || isLoggingEnabled(),
  IS_MOCK_ENABLED: true, // process.env.ENABLE_MOCK_IN_PRODUCTION === "true",
};
