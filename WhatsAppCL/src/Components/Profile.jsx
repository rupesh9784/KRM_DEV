import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useAuth } from './AuthContext'

function Profile(props) {
    const {userData} =useAuth();
   console.log("check user" , userData)

  return (
    <div>
        {/* //profile top bar */}
        <div className="bg-[#04a784] h-full text-white p-4 text-lg flex items-center gap-6">
          <button onClick={props.goHome}>
            <ArrowLeft />
          </button>
          <div>Profile</div>
        </div>
        {/* //profil body */}
        <div className="bg-gray-100 flex flex-col gap-4 items-center p-10">
          <img
            className="rounded-full h-60 w-60 p-10"
            src={userData.profile_pic ||  "/default_profile_pic.webp"}
            alt="user_profile_pic"
          />
          <h2>{userData.name}</h2>
          <h2>{userData.status}</h2>
          <h2>{userData.email}</h2>
        </div>
      </div>
  )
}

export default Profile