import React, { useContext, useState, useEffect } from "react"
import { auth, provider, db } from "../firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { getDocs, collection } from "firebase/firestore"
import { toast } from "react-toastify"

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [blogList, setBlogList] = useState([])
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
            toast.success("Login Successfull!")
        });
    };

    const signedOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
            toast.error("Loged Out!!!")
        })
    }

    const blogsCollectionRef = collection(db, "blogs")
    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogsCollectionRef);
            setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getBlogs();
    })

    return <AppContext.Provider value={{ isAuth, setIsAuth, signInWithGoogle, signedOut, blogList }}>{children}</AppContext.Provider>
}
const useGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobal }