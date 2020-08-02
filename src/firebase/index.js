import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlNUOvcgv8i8ikU6fVZHQBRvQK7wZxov4",
  authDomain: "react-firebase-auth-25974.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-25974.firebaseio.com",
  projectId: "react-firebase-auth-25974",
  storageBucket: "react-firebase-auth-25974.appspot.com",
  messagingSenderId: "984018317833",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
