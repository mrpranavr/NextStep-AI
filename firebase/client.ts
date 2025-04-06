import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCF4Fd-lfQclnOd2lqDsiieoDVUS-nyBx0",
  authDomain: "nextstep-f9c98.firebaseapp.com",
  projectId: "nextstep-f9c98",
  storageBucket: "nextstep-f9c98.firebasestorage.app",
  messagingSenderId: "1016473826215",
  appId: "1:1016473826215:web:34e1cd6951920632813c82",
  measurementId: "G-177DEBS4VR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)