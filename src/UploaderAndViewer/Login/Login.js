import {signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";
import {signInWithGoogle} from "./SignIns";
import "./Login.css";

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
                <button onClick={() => {
                    signOut(auth).then();
                }}>Sign Out
                </button>
            </div>
        );
    } else {
        return (
            <div className={"LoginContainer"}>
                <div className={"Login"}>
                    <button onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                    {/*TODO: Implement email based login as well*/}
                    {/*<div>Email: <input/></div>*/}
                    {/*<div>Password: <input/></div>*/}
                    {/*<button onClick={signInWithEmail}>*/}
                    {/*    Sign in with Email*/}
                    {/*</button>*/}
                    {/*<CreateAccount/>*/}
                </div>
            </div>
        );
    }
};


export default Login;