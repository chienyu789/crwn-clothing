import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVI7roezg4yUdcUJ3qlvSZF1nxRsL-LKA",
    authDomain: "crwn-db-fc930.firebaseapp.com",
    databaseURL: "https://crwn-db-fc930.firebaseio.com",
    projectId: "crwn-db-fc930",
    storageBucket: "crwn-db-fc930.appspot.com",
    messagingSenderId: "524512926666",
    appId: "1:524512926666:web:3aba78173986795a570d33",
    measurementId: "G-M08MSK8L48"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;