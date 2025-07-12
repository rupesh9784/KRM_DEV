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
  
   useEffect(() => {

    //login or not
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const { uid, photoURL, displayName, email } = docSnap.data();
          setUserData({
            id: uid,
            profile_pic: photoURL,
            email: email,
            name: displayName,
          });
        }
      }
    });
  },[]);


  return (
     <AuthContext.Provider value={{userData , setUserData}} >
       {children}
     </AuthContext.Provider>
  )
}

export default AuthWrapper