// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMTsPsbvarWVgJ0kR0SrN9OcEC4lUDxak",
  authDomain: "hi-notes.firebaseapp.com",
  projectId: "hi-notes",
  storageBucket: "hi-notes.appspot.com",
  messagingSenderId: "162324202002",
  appId: "1:162324202002:web:736504e20aaf4d592b8ecb"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
const db= getFirestore(app);


export default db;