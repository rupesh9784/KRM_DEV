import Home from "./Components/Home"
import {Routes , Route} from 'react-router-dom'
import Login from "./Components/Login"
import Chat from "./Components/Chat"
import PageNotFound from "./Components/PageNotFound"
import { useState } from "react"
import ProtectedRoute from "./Components/ProtectedRoute"

function App() {
  

  return (
    <>
     {/* <h1>WhatsApp Clone</h1> */}
       <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute >
              <Home ></Home>
            </ProtectedRoute>
          }
        >
          <Route
            path="/chat/:chatId"
            element={
              <ProtectedRoute >
                 <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route
          path="/login"
          element={<Login/>}
        ></Route>
         <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
  
    </>
  )
}

export default App


