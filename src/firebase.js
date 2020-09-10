import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

// import 'firebase/firestore'



 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCaQXqqQsZCJBViZQzF5CQy9pkCyDdmNAA",
  authDomain: "get-data-firebase-3a630.firebaseapp.com",
  databaseURL: "https://get-data-firebase-3a630.firebaseio.com",
  projectId: "get-data-firebase-3a630",
  storageBucket: "get-data-firebase-3a630.appspot.com",
  messagingSenderId: "425895550531",
  appId: "1:425895550531:web:a5e902ce07651241bcfef6",
  measurementId: "G-ERX4FJ2Y7G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();


  // export default {
  //   db:db,
  //   auth:auth
  // };

  export {db , auth}
  export default firebase;