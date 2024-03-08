// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsSeKlZQwDauHfyi9d3ZCbZQ4K2FnR9xQ",
  authDomain: "dynamiquevolleyball.firebaseapp.com",
  projectId: "dynamiquevolleyball",
  storageBucket: "dynamiquevolleyball.appspot.com",
  messagingSenderId: "1003655591253",
  appId: "1:1003655591253:web:7ffdce16e35a12592babdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
