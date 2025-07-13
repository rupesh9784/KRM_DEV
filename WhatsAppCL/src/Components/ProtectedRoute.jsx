import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Loader2Icon } from 'lucide-react';

function ProtectedRoute(props) {
   const {userData ,loading } = useAuth();
   const children = props.children;

    if(loading) return <div className='h-screen w-full flex justify-center items-center bg-[#eff2f5]' > 
    ...loading
     <Loader2Icon  className='w-8 h-8 animate-spin' />

    </div>
 

  if (userData){
      return  children;
  } else {
     return  <Navigate to='/login' />
  }

}

export default ProtectedRoute