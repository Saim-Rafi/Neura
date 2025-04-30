// import liveblocks from "@/lib/liveblocks";
// import { auth } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";
// import { adminDb } from "../../../firebase-admin";

// export async function POST(req: NextRequest) {
//   auth.protect();

//   const { sessionClaims } = await auth();
//   const { room } = await req.json();

//   const session = liveblocks.prepareSession(sessionClaims?.email!, {
//     userInfo: {
//       name: sessionClaims?.fullName!,
//       email: sessionClaims?.email!,
//       avatar: sessionClaims?.image!,
//     },
//   });

//   const usersInRoom = await adminDb
//     .collectionGroup("rooms")
//     .where("userId", "==", sessionClaims?.email)
//     .get();

//   const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);

//   if (userInRoom?.exists) {
//     session.allow(room, session.FULL_ACCESS);
//     const { body, status } = await session.authorize();
//     console.log("You are authorized");
//     return new Response(body, { status });
//   } else {
//     return NextResponse.json(
//       {message: "you are not in this room"},
//       {status: 403}
//     );
//   }
// }





import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "../../../firebase-admin";

export async function POST(req: NextRequest) {
  auth.protect();

  try {
    const { sessionClaims } = await auth();

    // Check if the request body exists and is valid JSON
    let body;
    try {
      body = await req.json();
    } catch (jsonError) {
      return NextResponse.json(
        { message: "Invalid JSON input" },
        { status: 400 }
      );
    }

    const { room } = body || {}; // Default to empty object if body is undefined

    if (!room) {
      return NextResponse.json(
        { message: "Missing 'room' property in request body" },
        { status: 400 }
      );
    }

    const session = liveblocks.prepareSession(sessionClaims?.email!, {
      userInfo: {
        name: sessionClaims?.fullName!,
        email: sessionClaims?.email!,
        avatar: sessionClaims?.image!,
      },
    });

    const usersInRoom = await adminDb
      .collectionGroup("rooms")
      .where("userId", "==", sessionClaims?.email)
      .get();

    const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);

    if (userInRoom?.exists) {
      session.allow(room, session.FULL_ACCESS);
      const { body: sessionBody, status } = await session.authorize();
      console.log("You are authorized");
      return new Response(sessionBody, { status });
    } else {
      return NextResponse.json(
        { message: "You are not in this room" },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}