import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1QyFr6LoVKJsnqrJlMC6nkNluMt5yYi0",
  authDomain: "testfire-1c2ca.firebaseapp.com",
  databaseURL: "https://testfire-1c2ca.firebaseio.com",
  projectId: "testfire-1c2ca",
  storageBucket: "testfire-1c2ca.appspot.com",
  messagingSenderId: "531953350975",
  appId: "1:531953350975:web:9db08d7fac934312"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  firebase.firestore().settings({
      
  })

  export default firebase;