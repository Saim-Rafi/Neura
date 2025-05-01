"use client";

import React from "react";
import { LiveblocksProvider as LiveblocksProviderOfficial } from "@liveblocks/react/suspense";
function LBP({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY) {
    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not defined");
  }
  return (
    <LiveblocksProviderOfficial throttle={16} authEndpoint={"/auth-endpoint"}>
        {/* throttle here refers to the FPS..16 is equal to 60fps(highest) */}
      {children}
    </LiveblocksProviderOfficial>
  );
}

export default LBP;


