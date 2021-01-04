import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA7cDnJnSVzaDIvoqUHuiJqzm4-63pfDsg",
  authDomain: "whatsapp-mern-37626.firebaseapp.com",
  projectId: "whatsapp-mern-37626",
  storageBucket: "whatsapp-mern-37626.appspot.com",
  messagingSenderId: "1029064777486",
  appId: "1:1029064777486:web:8b4147b8d3208edec5815f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db