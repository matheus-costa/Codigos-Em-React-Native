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
  apiKey: "AIzaSyDqPWkn5qrwAni7FSIHw1Vm0cxiBxLIjFU",

  authDomain: "bancadeprodutos-7f973.firebaseapp.com",

  projectId: "bancadeprodutos-7f973",

  storageBucket: "bancadeprodutos-7f973.appspot.com",

  messagingSenderId: "1005310475864",

  appId: "1:1005310475864:web:ea7edff66827cc6360142d",

  measurementId: "G-30SPQCECDP",
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
