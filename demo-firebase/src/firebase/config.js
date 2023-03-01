import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTp4DEFdZaDO24GZhLsr3mf8m4bV9k2Lg",
  authDomain: "fir-5fa6f.firebaseapp.com",
  projectId: "fir-5fa6f",
  storageBucket: "fir-5fa6f.appspot.com",
  messagingSenderId: "253443494379",
  appId: "1:253443494379:web:a005bd25e78fab8315c9ae",
  measurementId: "G-3EXNNMKD91"
};

export const Firebase= firebase.initializeApp(firebaseConfig)
 