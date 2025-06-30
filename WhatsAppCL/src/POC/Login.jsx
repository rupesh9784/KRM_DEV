import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
const  setisLoggedIn = props.setisLoggedIn;
  const navig = useNavigate();
  console.log(navig);

  const handleLogin = () => {
    setisLoggedIn(true);
    alert("logged in");
    navig("/");
  }


  return (
    <>
       <h1>Login Page</h1>
       <button onClick={handleLogin}>LogIn</button>
    </>
  )
}

export default Login