import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOqPG1m7V9MbXBs3iQRfocu4htpt3xzp8",
  authDomain: "neura-3f5d1.firebaseapp.com",
  projectId: "neura-3f5d1",
  storageBucket: "neura-3f5d1.firebasestorage.app",
  messagingSenderId: "80080276623",
  appId: "1:80080276623:web:dad44c6917e683b471f4fa"
};

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export {db};