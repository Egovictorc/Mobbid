import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB9UUyo3uZCf1s6P0Dui9icsC3el1FPu7o",
  authDomain: "fir-test-13d99.firebaseapp.com",
  databaseURL: "https://fir-test-13d99.firebaseio.com",
  projectId: "fir-test-13d99",
  storageBucket: "fir-test-13d99.appspot.com",
  messagingSenderId: "1023515130599",
  appId: "1:1023515130599:web:203091c6c0d61501"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  firebase.firestore().settings({
      
  })

  export default firebase;