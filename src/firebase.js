// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// import { getAuth } from "firebase/auth";   
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkXFedtbE8dI01NC0bOIL3MVKpDEtXqDk",
  authDomain: "ecommerceapp-879ee.firebaseapp.com",
  projectId: "ecommerceapp-879ee",
  storageBucket: "ecommerceapp-879ee.firebasestorage.app",
  messagingSenderId: "818551563079",
  appId: "1:818551563079:web:8fd7c0302062b1367ee262",
  // measurementId: "G-XLX93RRV4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);

export { db}; // <-- THIS is what makes { db } importable
// const analytics = getAnalytics(app);

