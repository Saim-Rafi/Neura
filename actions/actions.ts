"use server"

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";
// import { doc } from "firebase/firestore";

export async function createNewDocument(){
    auth.protect(); //if you go and access it without being authenticate ..it will throw you to the clerk login screen

    const {sessionClaims} = await auth();

    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId:sessionClaims?.email,
        role: "owner",
        createdAt: new Date(), 
        roomId: docRef.id,
    })

    return {docId: docRef.id};
 }