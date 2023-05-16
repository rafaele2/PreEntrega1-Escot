import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBIQktBTGQfSUW-AHJTqsfRvhbxRNnEmq0",
  authDomain: "clase7-14986.firebaseapp.com",
  projectId: "clase7-14986",
  storageBucket: "clase7-14986.appspot.com",
  messagingSenderId: "208929641427",
  appId: "1:208929641427:web:cc596c607231a592edd526"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };