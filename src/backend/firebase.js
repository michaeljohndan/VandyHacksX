import { initializeApp } from "firebase/app";
import {
    getFirestore, setDoc, doc
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import {data} from "./keys.js"

const firebaseConfig = {
  apiKey: data.API_KEY,
  authDomain: data.AUTH_DOMAIN,
  projectId: data.PROJECT_ID,
  storageBucket: data.STORAGE_BUCKET,
  messagingSenderId: data.MESSAGING_SENDER_ID,
  appId: data.APP_ID,
  measurementId: data.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

function createUser(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password).then((cred)=> {
    setDoc(doc(db, 'users', cred.user.uid), {
      name: name
    });

    console.log('successfully created user: ' + email)
  });
}


function logout() {
  signOut(auth).then(()=> {
    console.log("the user signed out");
  })
  .catch((err)=> {
    console.log(err.message);
  })
}

export default { auth, app, db, createUser, createFood, logout };
export { createFood }