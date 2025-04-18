import { auth } from "@clerk/nextjs/server";
import { RoomProvider } from "@liveblocks/react";
import React from "react";

function DocLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
    //auth().protect() is used to redirect unauthenticated users to the sign-in page.
  auth().protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
