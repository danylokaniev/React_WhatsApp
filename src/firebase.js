import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhE7pLNqodnH7qjLroPDUwQWc6STHVkdE",
  authDomain: "whatsapp-87b4d.firebaseapp.com",
  databaseURL: "https://whatsapp-87b4d.firebaseio.com",
  projectId: "whatsapp-87b4d",
  storageBucket: "whatsapp-87b4d.appspot.com",
  messagingSenderId: "708949522780",
  appId: "1:708949522780:web:9d6b9e84e52097ee196999",
  measurementId: "G-HTTWRM04VN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;


