



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
  //apiKey: "AIzaSyAOloBdXW9vjg51AZx4ifLksV1uNbe4Yh8",
  //authDomain: "react-reservation-97e22.firebaseapp.com",
  //projectId: "react-reservation-97e22",
  //storageBucket: "react-reservation-97e22.appspot.com",
  //messagingSenderId: "787719171722",
  //appId: "1:787719171722:web:63ff8d8397951a9011c773"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//export const auth = firebase.auth();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider(); 

export const auth = firebase.auth();

//export default firebase;