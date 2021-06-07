
import firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBoHu4GKvbIG6gZpa2OHsxVmHikgpsNBGM",
    authDomain: "reactnative-7.firebaseapp.com",
    projectId: "reactnative-7",
    storageBucket: "reactnative-7.appspot.com",
    messagingSenderId: "58821640843",
    appId: "1:58821640843:web:e05dc6471d8aa573694a8e",
    measurementId: "G-C4CGCXS18M"
  };
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export const HomeRef = db.collection("HOME");
export const NotiRef = db.collection("NOTI");
export const HocKyRef =db.collection("HocKy")
export default firebase;