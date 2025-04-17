"use client";

import React from "react";
import { LiveblocksProvider } from "@liveblocks/react/suspense";
function LiveBlocksProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not defined");
  }
  return (
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}>
        {/* throttle here refers to the FPS..16 is equal to 60fps(highest) */}
      {children}
    </LiveblocksProvider>
  );
}

export default LiveBlocksProvider;
