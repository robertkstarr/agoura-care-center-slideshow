import {signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";
import {signInWithGoogle} from "./SignIns";
import "./Login.css";
import Loading from "../../Loading";

const Login = () => {
    const [signedIn, setSignedIn] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(
            () => {
                if (auth.currentUser) {
                    setSignedIn(true);
                } else {
                    setSignedIn(false);
                }
            }
        );
    });

    if (signedIn === null) {
        return <div className={"LoginContainer"}><Loading/></div>;
    } else {
        if (signedIn) {
            return (
                <div>
                    <button className={"button"} onClick={() => {
                        signOut(auth).then();
                    }}>Sign Out
                    </button>
                </div>
            );
        } else {
            return (
                <div className={"LoginContainer"}>
                    <div className={"Login"}>
                        <button className={"button"} onClick={signInWithGoogle}>
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
    }
};


export default Login;