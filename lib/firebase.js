// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZHUenkiXeEEj2ITNXggYNF3-D1L7asDA",
  authDomain: "next-firebase-auth-79259.firebaseapp.com",
  projectId: "next-firebase-auth-79259",
  storageBucket: "next-firebase-auth-79259.firebasestorage.app",
  messagingSenderId: "279099126354",
  appId: "1:279099126354:web:06c64f9f0559ae103fa58b",
  measurementId: "G-C6256L2QQ4"
};

// Avoid re-initializing Firebase in dev hot-reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
