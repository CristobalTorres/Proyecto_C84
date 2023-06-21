import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCaHDKCqDVjG8uPs_asuNqOMPUiB4OMXPk",
  authDomain: "proyecto-79.firebaseapp.com",
  projectId: "proyecto-79",
  storageBucket: "proyecto-79.appspot.com",
  messagingSenderId: "942060965941",
  appId: "1:942060965941:web:c1cf8bd4b7525e9d68217c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
