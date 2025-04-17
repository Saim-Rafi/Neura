"use client";

import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "../../actions/actions";

function NewDocumentButton () {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewdocument = () => {
    startTransition(async () => {
      const { docId } =  await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };
  return (
    <Button onClick={handleCreateNewdocument} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
};

export default NewDocumentButton;
