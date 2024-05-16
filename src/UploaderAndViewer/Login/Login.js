import React from 'react';
import {signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";
import {signInWithGoogle} from "./SignIns";
import "./Login.css";
import {Button, CircularProgress} from "@mui/material";

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
        return <div className={"LoginContainer"}><CircularProgress/></div>;
    } else {
        if (signedIn) {
            return (
                <div>
                    <Button sx={{m: 1.5}} variant={"contained"} className={"button"} onClick={() => {
                        signOut(auth).then();
                    }}>Sign Out
                    </Button>
                </div>
            );
        } else {
            return (
                <div className={"LoginContainer"}>
                    <div className={"Login"}>
                        <Button className={"button"} onClick={signInWithGoogle} variant={"contained"}>
                            Sign in with Google
                        </Button>
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