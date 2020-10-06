import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
const dotenv = require("dotenv");
dotenv.config();

const firebaseApp = firebase.initializeApp({
  // apiKey: "AIzaSyB7_1_8qNto5ZGPVzVwEO6cjWfnK7zUJxI",
  // authDomain: "crud-061.firebaseapp.com",
  // databaseURL: "https://crud-061.firebaseio.com",
  // projectId: "crud-061",
  // storageBucket: "crud-061.appspot.com",
  // messagingSenderId: "644876163597",
  // appId: "1:644876163597:web:2b7900962c2be95f265344",
  // measurementId: "G-QHLSYMK26C",

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

let db = firebaseApp.firestore();

export default db;
