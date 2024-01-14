// alias firebase="`npm config get prefix`/bin/firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpodwslFfCnMweS0cWFNtCoCNXkvcEGK0",
  authDomain: "reack-netflix-gpt.firebaseapp.com",
  projectId: "reack-netflix-gpt",
  storageBucket: "reack-netflix-gpt.appspot.com",
  messagingSenderId: "569355606962",
  appId: "1:569355606962:web:1472bc1ccb04e39d1e62ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("app: ", app);
export const auth = getAuth();
