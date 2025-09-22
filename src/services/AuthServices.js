// src/services/authService.js
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export async function adminLogin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the user for the UI to use
  } catch (error) {
    throw new Error(error.message); // Let the UI handle the error
  }
}

export async function adminLogout() {
  await signOut(auth);
}
