import React, {createContext, useEffect, useState} from 'react';
import firebase, {auth} from "../../firebase/firebase"
export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [userState, setUserState] = useState(null);
    const [authPending, setAuthPending] = useState(true);

    const signIn = () => {
        return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    const signOut = () => auth.signOut();

    useEffect(() => {
        return auth.onAuthStateChanged((userAuth) => {
            console.log(userAuth);
            setUserState(userAuth);
            setAuthPending(false);
        })
    }, [])

    if (authPending) {
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"}}
            >
                <div>Authentication in progress</div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{
            signIn: signIn,
            signOut: signOut,
            userState: userState
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}