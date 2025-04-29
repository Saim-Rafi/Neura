"use client"

import Document from "@/components/Document";
import React from "react";

function DocumentPage ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return <div className="flex flex-col flex-1 min-h-screen">
    {/* <Document id={id} /> */}
    Document page
  </div>;
};

export default DocumentPage;
