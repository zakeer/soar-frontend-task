import { delay, http, HttpResponse } from "msw";

// Define constants for HTTP status codes
const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
};

// Utility function to create JSON responses
export const createJsonResponse = (
  data: object,
  status: number = HTTP_STATUS.OK
) => {
  return HttpResponse.json(data, { status });
};

// Centralized error handling function
export const handleError = (message: string) => {
  return createJsonResponse({ error: message }, HTTP_STATUS.BAD_REQUEST);
};

// Generic GET handler
export const createGetHandler = (url: string, data: object) => {
  return http.get(url, async () => {
    await delay();
    return createJsonResponse(data);
  });
};
