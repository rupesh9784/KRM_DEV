import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { Navigate, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import ProtectedRoute from "./ProtectedRoute";

function Routing_App() {
   

  return (
    <>
      <div>Routing_App</div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home  ></Home>
            </ProtectedRoute>
          }
        >
          <Route
            path="/chat/:uniqueId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Chat  ></Chat>
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route
          path="/login"
          element={<Login  />}
        ></Route>
         <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default Routing_App;
