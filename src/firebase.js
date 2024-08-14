import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtFvwfIpfjONntWR_NqWIKwX-jjHQg0C0",
    authDomain: "drive-clone-app-8c250.firebaseapp.com",
    projectId: "drive-clone-app-8c250",
    storageBucket: "drive-clone-app-8c250.appspot.com",
    messagingSenderId: "476615162426",
    appId: "1:476615162426:web:2ae5c1cdb13d4ea45b5303",
    measurementId: "G-2R6C0NSV9K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
