import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUL74mqVCIY1MMclrRhdVbY_VyP4lgQpY",
  authDomain: "waiappstore.firebaseapp.com",
  projectId: "waiappstore",
  storageBucket: "waiappstore.firebasestorage.app",
  messagingSenderId: "161610339691",
  appId: "1:161610339691:web:ce59fafb6a21729030682e",
  measurementId: "G-HH95X102MG"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
