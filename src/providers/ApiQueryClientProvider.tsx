import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { type ReactNode, useEffect } from "react";
import { result } from "lodash";
import log from "@/common/log";

export function parseAxiosError(error: unknown): string {
  log.error("[query error]", error);

  if (isAxiosError(error)) {
    // Check for response data message first
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    // Fallback to error message
    if (error.message) {
      return error.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  // Convert error to string if possible
  if (error && typeof error === "object" && "toString" in error) {
    return error.toString();
  }

  // Default error message
  return "Unknown Error";
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown, query) => {
      const ignoreToast = result(query.meta, "ignoreGlobalErrorToast", false);
      if (!ignoreToast) {
        log.error(parseAxiosError(error));
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown, _a, _b, mutation) => {
      const ignoreToast = result(
        mutation.meta,
        "ignoreGlobalErrorToast",
        false
      );
      if (!ignoreToast) {
        log.error(parseAxiosError(error));
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      gcTime: 1000 * 60 * 2, // 2 minutes
    },
  },
});

interface Props {
  children: ReactNode;
  clearOnUnmount?: boolean;
}

export function ApiQueryClientProvider({
  children,
  clearOnUnmount = false,
}: Props) {
  useEffect(() => {
    log.debug("[dem] bootstrap query client");
    return () => {
      if (clearOnUnmount) {
        log.debug("[dem] clearing query client");
        queryClient.clear();
      }
    };
  }, [clearOnUnmount]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
