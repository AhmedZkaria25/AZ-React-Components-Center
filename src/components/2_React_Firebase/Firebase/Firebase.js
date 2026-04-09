// Firebase configration to run it
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCjgGnAQEq21mhDuiGEGtgYNlrAkk2gpwY",
    authDomain: "react-firebase-768ff.firebaseapp.com",
    projectId: "react-firebase-768ff",
    storageBucket: "react-firebase-768ff.appspot.com",
    messagingSenderId: "158925404231",
    appId: "1:158925404231:web:2dead90beb8103090e9962"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // Use already initialized instance
  }

export default firebase;  
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
// Firebase configration to run it