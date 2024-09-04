// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1G4ZBEAxjiGYQIm1Yit47jcAMr_n2eHE",
  authDomain: "inventory-management-6bc72.firebaseapp.com",
  projectId: "inventory-management-6bc72",
  storageBucket: "inventory-management-6bc72.appspot.com",
  messagingSenderId: "547358717273",
  appId: "1:547358717273:web:157b1cfa29926513b70848",
  measurementId: "G-DJ0Z6Q9CHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}