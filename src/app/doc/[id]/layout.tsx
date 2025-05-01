// import { auth } from "@clerk/nextjs/server";
// import { RoomProvider } from "@liveblocks/react";
// import React from "react";

// function DocLayout({
//   children,
//   params: { id },
// }: {
//   children: React.ReactNode;
//   params: { id: string };
// }) {
//   //auth().protect() is used to redirect unauthenticated users to the sign-in page.
//   // auth().protect();
//   const initialPresence = {
//     cursor: { x: 0, y: 0 }, // Set initial cursor position (you can set to null if you prefer no initial cursor)
//   };
//   return (
//     <RoomProvider id={id} initialPresence={initialPresence}>
//       {children}{" "}
//     </RoomProvider>
//   );
// }

// export default DocLayout;

// import RoomProvider from "@/components/RoomProvider";
// import { auth } from "@clerk/nextjs/server";

// function DocLayout({
//   children,
//   params: { id },
// }: {
//   children: React.ReactNode;
//   params: {
//     id: string;
//   };
// }) {
//   auth.protect();
//   return <RoomProvider roomId={id}>{children}</RoomProvider>;
// }
// export default DocLayout;

import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

export default async function DocLayout({
  children,
  params: paramsPromise, // Rename to avoid confusion
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>; // Type params as a Promise
}) {
  // Await the params Promise
  const params = await paramsPromise;
  const id = params.id;

  // auth.protect(); // Server-side authentication
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    // Not signed in — throw error or redirect
    throw new Error("Unauthorized"); // or use a Clerk redirect
  }
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}