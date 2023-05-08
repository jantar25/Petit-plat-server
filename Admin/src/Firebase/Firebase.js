// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM-7NXGT1FQlawV5N8daRVIyhp6WFRpBA",
    authDomain: "petit-plat.firebaseapp.com",
    projectId: "petit-plat",
    storageBucket: "petit-plat.appspot.com",
    messagingSenderId: "358330048916",
    appId: "1:358330048916:web:d6f27e860cd35cf6e1ef81",
    measurementId: "G-1H82BM58KQ"
  };

firebase.initializeApp(firebaseConfig)

// Initialize Firebase(
const storage = firebase.storage();
export { storage, firebase as default };


