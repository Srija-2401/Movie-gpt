// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpfrWHyVOxp3HDtRBBG_F8RimF78nXVbE",
  authDomain: "movie-gpt-35d3a.firebaseapp.com",
  projectId: "movie-gpt-35d3a",
  storageBucket: "movie-gpt-35d3a.appspot.com",
  messagingSenderId: "115983245413",
  appId: "1:115983245413:web:d61c034107b1b00a19e68c",
  measurementId: "G-D2N84QSN5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
