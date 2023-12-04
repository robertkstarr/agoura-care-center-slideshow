import {browserLocalPersistence, GoogleAuthProvider, setPersistence, signInWithPopup} from "firebase/auth";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    setPersistence(auth, browserLocalPersistence).then(
        () => {
            signInWithPopup(auth, provider).then();
        });
};