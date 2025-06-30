import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import {Navigate, Routes, Route } from "react-router-dom";
function Routing_App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <>
      <div>Routing_App</div>
      <Routes>
        <Route path="/" element={<ProtectedRoute 
        isLoggedIn={isLoggedIn} 
        setisLoggedIn = {setisLoggedIn}
        />}>
        
        </Route>
        <Route path="/login" element={<Login 
         setisLoggedIn = {setisLoggedIn}
        />}> 
          
        </Route>
      </Routes>
    </>
  );
}

function ProtectedRoute(props) {
   const isLoggedIn = props.isLoggedIn;
   const setisLoggedIn = props.setisLoggedIn;

   console.log(isLoggedIn);

  if (isLoggedIn){
      return <Home setisLoggedIn={setisLoggedIn} />
  } else {
     return  <Navigate to='/login' />
  }


}

export default Routing_App;
