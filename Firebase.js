// firebase.js
// Exports initialized Firebase services for the app

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  limit,
  serverTimestamp,
  increment
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

// ---- Replace with your config ----
const firebaseConfig = {
  apiKey: "AIzaSyAUL74mqVCIY1MMclrRhdVbY_VyP4lgQpY",
  authDomain: "waiappstore.firebaseapp.com",
  projectId: "waiappstore",
  storageBucket: "waiappstore.firebasestorage.app",
  messagingSenderId: "161610339691",
  appId: "1:161610339691:web:ce59fafb6a21729030682e",
  measurementId: "G-HH95X102MG"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch(e){ /* analytics may fail in local */ }

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, sendPasswordResetEmail, updateProfile,
  db, collection, doc, setDoc, getDoc, getDocs, addDoc, deleteDoc, updateDoc,
  query, where, orderBy, onSnapshot, limit, serverTimestamp, increment,
  storage, ref, uploadBytesResumable, getDownloadURL, deleteObject
};
