import * as firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyAMFS81_nl6oQBJgS198ejug6ScKUBkQ1E",
    authDomain: "diary-d8346.firebaseapp.com",
    databaseURL: "https://diary-d8346.firebaseio.com",
    projectId: "diary-d8346",
    storageBucket: "diary-d8346.appspot.com",
    messagingSenderId: "565140012316",
    appId: "1:565140012316:web:6a6e7c2195014d8b3f0ed9",
    measurementId: "G-GT6J0XM78L"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const database = firebase.database().ref('/notes');

  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const twitterProvider = new firebase.auth.TwitterAuthProvider();