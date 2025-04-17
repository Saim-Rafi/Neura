"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { Heading1 } from "lucide-react";
import React from "react";
import Breadcrums from "./Breadcrums";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center p-5">
      {user && (
        <h1 className="text-2xl font-bold">
          {user?.firstName}{`'s`} Space
         </h1>
      )}

      {/* Breadcrumbs */}
      <Breadcrums />

      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>

        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
