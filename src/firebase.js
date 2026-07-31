import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDEBiUQXz14dBZp0j190a38cA0qQGVwcPk",
  authDomain: "disney-plus-clone-1d1fd.firebaseapp.com",
  projectId: "disney-plus-clone-1d1fd",
  storageBucket: "disney-plus-clone-1d1fd.firebasestorage.app",
  messagingSenderId: "980740057369",
  appId: "1:980740057369:web:0688f29d399aa247537d88",
  measurementId: "G-LN3DD7YF7P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
