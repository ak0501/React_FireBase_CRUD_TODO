import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7_1_8qNto5ZGPVzVwEO6cjWfnK7zUJxI",
  authDomain: "crud-061.firebaseapp.com",
  databaseURL: "https://crud-061.firebaseio.com",
  projectId: "crud-061",
  storageBucket: "crud-061.appspot.com",
  messagingSenderId: "644876163597",
  appId: "1:644876163597:web:2b7900962c2be95f265344",
  measurementId: "G-QHLSYMK26C",
});

let db = firebaseApp.firestore();

export default db;
