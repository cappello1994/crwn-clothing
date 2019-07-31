import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyC7_T7KTBQ4P55EtELwTGLi0Ydf98C8NTE",
    authDomain: "crwn-db-a8da8.firebaseapp.com",
    databaseURL: "https://crwn-db-a8da8.firebaseio.com",
    projectId: "crwn-db-a8da8",
    storageBucket: "",
    messagingSenderId: "282921886425",
    appId: "1:282921886425:web:1c02362419f7456c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;