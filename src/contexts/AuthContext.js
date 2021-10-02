import React, {useContext, useState, useEffect} from 'react'

//services
import { auth } from '../firebase';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    //if you don't want to use Firebase just change this to connect to your server-the rest stays the same
    function signup(email, pasword){
        return auth.createUserWithEmailAndPassword(email,pasword)
    }
    //if you don't want to use Firebase just change this to connect to your server-the rest stays the same
    function login(email, pasword){
        return auth.signInWithEmailAndPassword(email,pasword)
    }

    function logout(){
      return auth.signOut
    }
    
    function resetPassword(email){
      return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
      return currentUser.updateEmail(email)

    }

    function updatePassword(password){
      return currentUser.updatePassword(password)
    }


    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    

    const value={
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
