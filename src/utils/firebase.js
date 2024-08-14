// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFr5XrA8LSNSf6skPFjqKvX6pwEiXSd8A",
  authDomain: "gpt-flix-aj18.firebaseapp.com",
  projectId: "gpt-flix-aj18",
  storageBucket: "gpt-flix-aj18.appspot.com",
  messagingSenderId: "217015628872",
  appId: "1:217015628872:web:ec965925e314ff42e2547d",
  measurementId: "G-FREHBG69GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();