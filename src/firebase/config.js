// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDOwBb8vjUeszWxJ3fqw2ikUTj81ohEn54",
    authDomain: "react-db-1c210.firebaseapp.com",
    projectId: "react-db-1c210",
    storageBucket: "react-db-1c210.appspot.com",
    messagingSenderId: "618615469658",
    appId: "1:618615469658:web:4d2b16bf7e2b6ae4480a63",
    measurementId: "G-L2KMCFGWLD",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
