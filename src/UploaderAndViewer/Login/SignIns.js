import {
    browserLocalPersistence,
    EmailAuthProvider,
    GoogleAuthProvider,
    setPersistence,
    signInWithPopup
} from "firebase/auth";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";

function signIn(provider) {
    setPersistence(auth, browserLocalPersistence).then(
        () => {
            signInWithPopup(auth, provider).then();
        });
}

export const signInWithGoogle = () => {
    signIn(new GoogleAuthProvider());
};

export const signInWithEmail = () => {
    signIn(new EmailAuthProvider());
};