import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCfosCvlkcEc1HCdyMXyUwQqJyU_DbAPxI",
  authDomain: "emoticon-1abb7.firebaseapp.com",
  projectId: "emoticon-1abb7",
  storageBucket: "emoticon-1abb7.appspot.com",
  messagingSenderId: "328305718237",
  appId: "1:328305718237:web:f8bfef7a92c59700a07c34",
  measurementId: "G-CQDW342C4K"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
