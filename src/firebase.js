// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7PkAX62zn4Hs6WTsPHBUHUeY-O2LDF4",
  authDomain: "prashant-machine-tools.firebaseapp.com",
  databaseURL: "https://prashant-machine-tools-default-rtdb.firebaseio.com",
  projectId: "prashant-machine-tools",
  storageBucket: "prashant-machine-tools.appspot.com",
  messagingSenderId: "630372378726",
  appId: "1:630372378726:web:d7e85915efe28986ef25a7"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);