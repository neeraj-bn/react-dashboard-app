import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App";
import "./index.css";

// Initialize Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
