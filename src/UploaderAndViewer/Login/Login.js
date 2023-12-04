import {signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";
import {signInWithGoogle} from "./SignIns";

const Login = () => {
    const [email, setEmail] = useState("");
    const [signedIn, setSignedIn] = useState(false);


    useEffect(() => {
        auth.onAuthStateChanged(
            () => {
                if (auth.currentUser) {
                    setEmail(auth.currentUser.email);
                    setSignedIn(true);
                } else {
                    setEmail("");
                    setSignedIn(false);
                }
            }
        );
    });

    if (signedIn) {
        return (
            <div>
                <div>Email: {email}</div>
                <button onClick={() => {
                    signOut(auth).then();
                }}>Sign Out
                </button>
            </div>
        );
    } else {
        return (
            <button onClick={signInWithGoogle}>
                Sign in
            </button>);
    }
};


export default Login;