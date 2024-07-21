import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmYwysafVxS2YqMTTgW8sfOlGw_3kyTfk",
  authDomain: "caremarkpharma-11782.firebaseapp.com",
  projectId: "caremarkpharma-11782",
  storageBucket: "caremarkpharma-11782.appspot.com",
  messagingSenderId: "848773825685",
  appId: "1:848773825685:web:764d5554a70cff3a35479c",
  measurementId: "G-S5X2MMQ891"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
