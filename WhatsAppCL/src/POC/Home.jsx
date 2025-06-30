import React from 'react'

function Home(props) {

  const setisLoggedIn = props.setisLoggedIn;

 const handleLogout = () => {
    setisLoggedIn(false);
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