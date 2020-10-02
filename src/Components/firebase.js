import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKaGP3zb69hZR8BvcViVNRPlPTuNdJFqo",
  authDomain: "chat-app-9ebb7.firebaseapp.com",
  databaseURL: "https://chat-app-9ebb7.firebaseio.com",
  projectId: "chat-app-9ebb7",
  storageBucket: "chat-app-9ebb7.appspot.com",
  messagingSenderId: "278338245810",
  appId: "1:278338245810:web:7d1d73d3d9c905ec6b25ab",
  measurementId: "G-BSYJC8RBR1"
 });

const db = firebaseApp.firestore();

export default db;
