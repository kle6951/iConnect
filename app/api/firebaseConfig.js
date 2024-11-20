import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIwDz3hJUDGuz2V_pmuw9ykgcxOi4C_zY",
  authDomain: "iconnect-439421.firebaseapp.com",
  projectId: "iconnect-439421",
  storageBucket: "iconnect-439421.firebasestorage.app",
  messagingSenderId: "675464389249",
  appId: "1:675464389249:web:2f3c1b97c99ffe5c82a380",
  measurementId: "G-9ESS4KBEHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
