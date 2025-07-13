import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthWrapper({children}) {

  //
  const [userData, setUserData] = useState(null);
  const [loading , setLoading] = useState(true);
  
  
   useEffect(() => {

    //login or not
    onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
           console.log("onauth dat " , docSnap.data());
          const { profile_pic, name, email } = docSnap.data();
          setUserData({
            id: currentUser.uid,
            profile_pic: profile_pic,
            email: email,
            name: name,
          });
        }
       }
      setLoading(false);

    });
  },[]);


  return (
     <AuthContext.Provider value={{userData , setUserData ,loading}} >
       {children}
     </AuthContext.Provider>
  )
}

export default AuthWrapper