import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyClNCNLfcy9ccrwpccKiQgG8AEJofKdup0",
  authDomain: "e-com-a3703.firebaseapp.com",
  projectId: "e-com-a3703",
  storageBucket: "e-com-a3703.appspot.com",
  messagingSenderId: "110431505729",
  appId: "1:110431505729:web:5ec1aa936b6c35c2df25c0",
  measurementId: "G-PNYSPY60K4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
