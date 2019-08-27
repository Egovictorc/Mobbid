import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env_REACT_APP_API_KEY,
  authDomain: process.env_REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env_REACT_APP_DATABASE_URL,
  projectId: process.env_REACT_APP_PROJECT_ID,
  storageBucket: process.env_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env_REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env_REACT_APP_APP_ID,
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  firebase.firestore().settings({
      
  })

  export default firebase;