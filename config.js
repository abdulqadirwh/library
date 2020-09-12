import * as firebase from 'firebase';
require ('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCbINpxoE8W-UmxTQ8B88WQ0bOx2FDmTXU",
    authDomain: "library-919d9.firebaseapp.com",
    databaseURL: "https://library-919d9.firebaseio.com",
    projectId: "library-919d9",
    storageBucket: "library-919d9.appspot.com",
    messagingSenderId: "685440336896",
    appId: "1:685440336896:web:200e5cb2e6a11f284c44e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();