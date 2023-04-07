import React, { useContext, useState, useEffect } from "react"
import { auth, provider } from "../firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    const signedOut = () => {
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        })
    }


    return <AppContext.Provider value={{ isAuth, setIsAuth, signInWithGoogle }}>{children}</AppContext.Provider>
}
const useGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobal }