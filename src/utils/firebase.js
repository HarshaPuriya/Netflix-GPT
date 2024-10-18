// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFBweZfznPMVZmliT6PebyEnQ8tPBbBc",
  authDomain: "netflix-gpt-e8f90.firebaseapp.com",
  projectId: "netflix-gpt-e8f90",
  storageBucket: "netflix-gpt-e8f90.appspot.com",
  messagingSenderId: "138517781198",
  appId: "1:138517781198:web:2d6b240f3c621919d70e9f",
  measurementId: "G-Q5B8YRMH37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();