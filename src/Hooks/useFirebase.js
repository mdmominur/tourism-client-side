import initializeAuth from "../Pages/Login/Firebase/Firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const auth = getAuth();
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
       
    }

    const logout = () => {
        setIsloading(true);
        signOut(auth)
        .then(result => {})
        .finally(()=> setIsloading(false));
    }

       //onAuthStateChanged
       useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if(user){
                  setUser(user);
              }else{
                  setUser({});
              }
              setIsloading(false)
          });
          return () => unsubscribed;
      },[]);

    return {
        handleGoogleLogin,
        user,
        logout,
        isLoading
    }
}

export default useFirebase;