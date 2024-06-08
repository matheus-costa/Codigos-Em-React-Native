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
  apiKey: "AIzaSyBd-SZez3dZP9ZbVFmzVQb53xvMjclsMrk",
  authDomain: "tads-fa1ed.firebaseapp.com",
  projectId: "tads-fa1ed",
  storageBucket: "tads-fa1ed.appspot.com",
  messagingSenderId: "278108774133",
  appId: "1:278108774133:web:58bd718eb76b9fd6e56fbc"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };