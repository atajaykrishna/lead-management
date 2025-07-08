// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvOVfZNaY3F2wQ1btpLQhKKwbQGIbsYFE",
  authDomain: "leadmanage-7392e.firebaseapp.com",
  projectId: "leadmanage-7392e",
  storageBucket: "leadmanage-7392e.firebasestorage.app",
  messagingSenderId: "547991053967",
  appId: "1:547991053967:web:2ba32cfc4472bf41dbf2fa",
  measurementId: "G-9BBDB8411D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
