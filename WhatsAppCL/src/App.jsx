import Home from "./Components/Home"
import {Routes , Route} from 'react-router-dom'
import Login from "./Components/Login"
import Chat from "./Components/Chat"
import PageNotFound from "./Components/PageNotFound"
import { useState } from "react"
import ProtectedRoute from "./Components/ProtectedRoute"

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <>
     {/* <h1>WhatsApp Clone</h1> */}
       <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home setisLoggedIn={setisLoggedIn}></Home>
            </ProtectedRoute>
          }
        >
          <Route
            path="/chat/:uniqueId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Chat setisLoggedIn={setisLoggedIn}></Chat>
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route
          path="/login"
          element={<Login setisLoggedIn={setisLoggedIn} />}
        ></Route>
         <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
  
    </>
  )
}

export default App


