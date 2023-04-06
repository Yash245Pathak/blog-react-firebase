import React, { useContext, useState } from "react"
import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    let navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    }
    const signedOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false);
            navigate("/login");
        })
    }

    return <AppContext.Provider value={{ isAuth, setIsAuth, signInWithGoogle, signedOut }}>{children}</AppContext.Provider>
}
const useGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobal }