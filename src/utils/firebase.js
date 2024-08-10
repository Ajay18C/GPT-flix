// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk40sCiBk4zi0rNud2nEhuSIVZXLSnZ1A",
  authDomain: "gpt-flix-5f1cd.firebaseapp.com",
  projectId: "gpt-flix-5f1cd",
  storageBucket: "gpt-flix-5f1cd.appspot.com",
  messagingSenderId: "942784611521",
  appId: "1:942784611521:web:a6266d336c539ed4d44040",
  measurementId: "G-8KYNKLBR3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();