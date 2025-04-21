// src/components/TestQuery.tsx
"use client";

import { useEffect, useState } from "react";
import {
  getFirestore,
  collectionGroup,
  query,
  where,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { useAuth } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOqPG1m7V9MbXBs3iQRfocu4htpt3xzp8",
  authDomain: "neura-3f5d1.firebaseapp.com",
  projectId: "neura-3f5d1",
  storageBucket: "neura-3f5d1.firebasestorage.app",
  messagingSenderId: "80080276623",
  appId: "1:80080276623:web:e41db0d6ed8038de71f4fa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface RoomDocument {
  id: string;
  createdAt: string;
  role: string;
  roomId: string;
  userId: string;
}

export default function TestQuery() {
  const user = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<RoomDocument[]>([]);

  const runQuery = async () => {
    if (!user) {
      setError("User not authenticated");
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const q = query(
        collectionGroup(db, "rooms"),
        where("roomId", "==", "LJfJ8fjfykkkdwXccKA5")
      );
      const snapshot = await getDocs(q); // Use getDocs instead of q.get()
      const queryResults: RoomDocument[] = snapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...(doc.data() as Omit<RoomDocument, "id">),
        })
      );
      setResults(queryResults);
      console.log("Query results:", queryResults);
      alert("Query ran successfully! Check console for results.");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Query error:", err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      runQuery();
    }
  }, [user]);

  return (
    <div>
      <h2>Test Query</h2>
      <button onClick={runQuery} disabled={loading || !user}>
        {loading ? "Running..." : "Run Query"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!user && <p>Please sign in to run the query.</p>}
      {results.length > 0 && (
        <div>
          <h3>Results:</h3>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {Object.entries(result)
                  .filter(([key]) => key !== "id")
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
