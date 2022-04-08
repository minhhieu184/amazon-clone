import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYhwoulFdBb5Y3vM4YNZt_GO8bs9p1FfA",
    authDomain: "clone-c8948.firebaseapp.com",
    projectId: "clone-c8948",
    storageBucket: "clone-c8948.appspot.com",
    messagingSenderId: "154900918959",
    appId: "1:154900918959:web:58b6640e773acb29d39a5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }