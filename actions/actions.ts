"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";
import liveblocks from "@/lib/liveblocks";
// import { doc } from "firebase/firestore";

export async function createNewDocument() {
  auth.protect(); //if you go and access it without being authenticate ..it will throw you to the clerk login screen

  const { sessionClaims } = await auth();

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({
    title: "New Doc",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email!)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}

export async function deleteDocument(roomId: string) {
  auth.protect(); //ensure user is authenticated

  console.log("delete document", roomId);

  try {
    //delte the document refernce itself
    await adminDb.collection("documents").doc(roomId).delete();

    const query = await adminDb
      .collectionGroup("rooms")
      .where("roomId", "==", roomId)
      .get();

    const batch = adminDb.batch();

    //delete the room reference in the users collection for every user in the room
    query.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    //delete the room from liveblocks
    await liveblocks.deleteRoom(roomId);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
