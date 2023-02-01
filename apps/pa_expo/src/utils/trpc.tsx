import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "trpc-api";

import Constants from "expo-constants";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, HTTPHeaders } from "@trpc/client";
import { transformer } from "trpc-api/transformer";

export const trpc = createTRPCReact<AppRouter>();

const getBaseUrl = () => {
  /**
   * Extend this function when going to production by
   * setting the baseUrl to your production API URL.
   */
  /**
   * Gets the IP address of your host-machine. If it cannot automatically find it,
   * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
   * you don't have anything else running on it, or you'd have to change it.
   */
  const localhost = Constants.manifest?.debuggerHost?.split(":")[0];
  if (!localhost) throw new Error("failed to get localhost, configure it manually");
  return `http://${localhost}:3000`;
};

let userId: string;
export const setUserId = (newUserId: string) => {
  userId = newUserId;
};

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer,
      links: [
        httpBatchLink({
          async headers(): Promise<HTTPHeaders> {
            return {
              id: userId,
            };
          },
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
