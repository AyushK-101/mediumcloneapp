// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "@firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnk6-32z7ecJyX4fJGVlByyVPwPAfdPBs",
  authDomain: "medium-clone-repl.firebaseapp.com",
  projectId: "medium-clone-repl",
  storageBucket: "medium-clone-repl.appspot.com",
  messagingSenderId: "210488559045",
  appId: "1:210488559045:web:ef04e59c61091f9e48f7ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db}