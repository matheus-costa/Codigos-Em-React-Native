// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgKzPWrnBNe4R26gnZUPViA5IKWk-WZRg",

  authDomain: "tadstest-de67f.firebaseapp.com",

  projectId: "tadstest-de67f",

  storageBucket: "tadstest-de67f.appspot.com",

  messagingSenderId: "991054460335",

  appId: "1:991054460335:web:096822f92db4da6eec6b5a",

  measurementId: "G-B8KKWN0138",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };
