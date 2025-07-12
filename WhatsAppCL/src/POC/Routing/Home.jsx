import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function Home(props) {

  

 const handleLogout =async () => {

   await signOut(auth);
    
     alert("log out");
 }
 

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}



export default Home