import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute(props) {
   const {userData} = useAuth();
   const children = props.children;

 

  if (userData){
      return  children;
  } else {
     return  <Navigate to='/login' />
  }

}

export default ProtectedRoute