import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuZbOpL-mFdjN3i7sCIOQMudPdg_ilYs",
  authDomain: "todo-list-53acd.firebaseapp.com",
  databaseURL: "https://todo-list-53acd-default-rtdb.firebaseio.com",
  projectId: "todo-list-53acd",
  storageBucket: "todo-list-53acd.appspot.com",
  messagingSenderId: "260834091651",
  appId: "1:260834091651:web:d5de07d10931266f6931b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);