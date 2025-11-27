import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href="feed.html")
    .catch((err) => errorMsg.textContent = err.message);
});

registerBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href="feed.html")
    .catch((err) => errorMsg.textContent = err.message);
});
