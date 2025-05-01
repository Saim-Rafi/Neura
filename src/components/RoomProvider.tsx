// "use client";
// import React from "react";

// import {
//   ClientSideSuspense,
//   RoomProvider as RoomProviderWrapper,
// } from "@liveblocks/react/suspense";
// import LoadingSpinner from "./LoadingSpinner";
// import LiveCursorProvider from "./LiveCursorProvider";

// function RoomProvider({
//   roomId,
//   children,
// }: {
//   roomId: string;
//   children: React.ReactNode;
// }) {
//   console.log("Rendering RoomProvider for roomId:", roomId);
//   return (
//     <RoomProviderWrapper id={roomId} initialPresence={{ cursor: null }}>
//       <ClientSideSuspense fallback={<LoadingSpinner />}>
//         <LiveCursorProvider>{children}</LiveCursorProvider>
//       </ClientSideSuspense>
//     </RoomProviderWrapper>
//   );
// }

// export default RoomProvider;






// src/components/RoomProvider.tsx
"use client";
import React, { useEffect } from "react";
import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
import LiveCursorProvider from "./LiveCursorProvider";
// import client from "../lib/liveblocks-client"; // Import the client

function RoomProvider({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("RoomProvider initialized for roomId:", roomId);
  }, [roomId]);

  return (
    <RoomProviderWrapper id={roomId} initialPresence={{ cursor: null }}>
      <ClientSideSuspense fallback={<LoadingSpinner />}>
        {() => (
          <LiveCursorProvider>
            {children}
          </LiveCursorProvider>
        )}
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
}

export default RoomProvider;