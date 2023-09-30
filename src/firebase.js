import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA5X6XuZKAql2ye4juu7lHquydzPMtvZCQ",
  authDomain: "fir-auth-9be80.firebaseapp.com",
  projectId: "fir-auth-9be80",
  storageBucket: "fir-auth-9be80.appspot.com",
  messagingSenderId: "1004823604860",
  appId: "1:1004823604860:web:62ee02d51c8c3b556ee3f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
