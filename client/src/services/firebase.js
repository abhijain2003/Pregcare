import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDYq7lKgTaermkhVwYPtgIQfW7jEO_bEc0",
  authDomain: "pregcare-d8851.firebaseapp.com",
  projectId: "pregcare-d8851",
  storageBucket: "pregcare-d8851.appspot.com",
  messagingSenderId: "134371893158",
  appId: "1:134371893158:web:cb67f4687311b4aacab967"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
