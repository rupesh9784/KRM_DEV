import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db, storage } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthWrapper({children}) {

  //
  const [userData, setUserData] = useState(null);
  const [loading , setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [error , setError] = useState("");
  
  
   useEffect(() => {

    //login or not
     const unsubscribe =  onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        //    console.log("onauth dat " , docSnap.data());
          await setLastSeen(currentUser);
          const { profile_pic, name, email ,lastSeen ,status} = docSnap.data();
          setUserData({
            id: currentUser.uid,
            profile_pic: profile_pic,
            email: email,
            name: name,
            lastSeen: lastSeen,
            status : status ? status : "",
          });
        }
       }
      setLoading(false);

    });

    return () =>{
        unsubscribe();
    }

  },[]);

   const setLastSeen = async(user) =>{
     const date = new Date();
    const timeStamp = date.toLocaleString("en-US" , {
      hour:"numeric",
      minute:"numeric",
      hour12:true,
    }) 

    await updateDoc(doc(db , "users" ,user.uid) , {
        lastSeen : timeStamp,
    })
   }
 
   const updateName = async (newName) => {
      await updateDoc(doc(db , "users" , userData.id) , {
        name: newName
      })
   }
   const updateStatus = async (newStatus) => {
      await updateDoc(doc(db , "users" , userData.id) , {
        status: newStatus
      })
   }

   const updatePhoto = async (img) => {
        // where to image upload 
        const storageRef = ref(storage, `profile/${userData.id}`);
        const uploadTask = uploadBytesResumable(storageRef, img);
        uploadTask.on(
            "state_changed",
            () => {
                // on State Changed
                setIsUploading(true);
                setError(null);
               
            },
            () => {
                // on Error
                setError("Unable to Upload!");
                setIsUploading(false);
                alert("Unable to Upload!");
            },
            () => {
                // on Success
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (downloadURL) => {
                        await updateDoc(doc(db, "users", userData.id), {
                            profile_pic: downloadURL,
                        });

                        setUserData({
                            ...userData,
                            profile_pic: downloadURL,
                        });
                        setIsUploading(false);
                        setError(null);
                    });
            }
        );
    };

  return (
     <AuthContext.Provider value={{userData , setUserData ,loading , updateName, updateStatus , updatePhoto , isUploading , error}} >
       {children}
     </AuthContext.Provider>
  )
}

export default AuthWrapper