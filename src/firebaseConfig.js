import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCqOb-TM7CskwnUOhGkhiLl1pwZq4AX9cg",
    authDomain: "proyecto-final-8bd9e.firebaseapp.com",
    projectId: "proyecto-final-8bd9e",
    storageBucket: "proyecto-final-8bd9e.appspot.com",
    messagingSenderId: "80985176810",
    appId: "1:80985176810:web:629882889476be5e2ab593",
    measurementId: "G-QYP23C72P6"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
