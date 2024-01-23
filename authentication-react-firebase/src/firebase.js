// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1zdVJa4TOWtr1IoukfNBwRUGiu3eIG5g",
  authDomain: "react-auth-81983.firebaseapp.com",
  projectId: "react-auth-81983",
  storageBucket: "react-auth-81983.appspot.com",
  messagingSenderId: "746530637809",
  appId: "1:746530637809:web:76b0ce26aa2c20cd26e650",
  measurementId: "G-1K56BYDNMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

