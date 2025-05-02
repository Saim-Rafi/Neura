// "use client";

// import Document from "@/components/Document";
// import React, { useEffect } from "react";

// function DocumentPage({
//   params: { id },
// }: {
//   params: {
//     id: string;
//   };
// }) {

//   // // Add direct console logging in the page component
//   // useEffect(() => {
//   //   console.log("Page component mounted with ID:", id);
//   // }, [id]);
  
//   return (
//     <div className="flex flex-col flex-1 min-h-screen">
//       <h1 className="text-black text-xl p-4">Page is loading for ID: {id}</h1>
//       <Document id={id} />
//     </div>
//   );
// }

// export default DocumentPage;




"use client";

import Document from "@/components/Document";
import * as React from "react"; // Import React for use()

function DocumentPage({
  params: paramsPromise, // Rename to avoid confusion
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
}) {
  // Unwrap params using React.use()
  const params = React.use(paramsPromise);
  const id = params.id; // Access id after unwrapping

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}

export default DocumentPage;
