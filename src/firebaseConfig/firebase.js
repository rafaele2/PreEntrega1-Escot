// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQktBTGQfSUW-AHJTqsfRvhbxRNnEmq0",
  authDomain: "clase7-14986.firebaseapp.com",
  projectId: "clase7-14986",
  storageBucket: "clase7-14986.appspot.com",
  messagingSenderId: "208929641427",
  appId: "1:208929641427:web:cc596c607231a592edd526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 