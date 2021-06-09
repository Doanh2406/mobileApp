
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
export const HocPhiRef =db.collection("HocPhi")
export const HocPhi2Ref =db.collection("HocPhi2")
export const HocPhi3Ref =db.collection("HocPhi3")
export const HocPhi4Ref =db.collection("HocPhi4")
export const KetQuaRef =db.collection("KetQua")
export const KetQua2Ref =db.collection("KetQua2")
export const KetQua3Ref =db.collection("KetQua3")
export const KetQua4Ref =db.collection("KetQua4")
export default firebase;