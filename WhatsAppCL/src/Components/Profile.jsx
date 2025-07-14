import { ArrowLeft, CheckIcon, Edit2Icon, Loader2Icon } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Profile(props) {
  const { userData , updateName , updateStatus, updatePhoto , isUploading , error} = useAuth();
  const navigate = useNavigate();
  const [name, setName]= useState(userData?.name ||  "");
  const [status , setStatus] = useState(userData?.status || "");
 
  const handleLogOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      {/* //profile top bar */}
      <div className="bg-[#04a784] w-[30vw] text-white p-4 text-lg flex items-center gap-6">
        <button onClick={props.goHome}>
          <ArrowLeft />
        </button>
        <div>Profile</div>
      </div>
      {/* //profil body */}
      <div className="bg-gray-100 flex flex-col gap-4 items-center p-10">
        
       {/* upload image */}
       <label
          className={` group relative cursor-pointer   rounded-full  overflow-hidden ${
            isUploading ? "pointer-events-none" : ""
          }`}
        >
          <img
            src={userData.profile_pic}
            className="w-[160px] h-[160px] object-cover "
            alt="profile picture"
          />
          {isUploading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
              <Loader2Icon className="w-6 h-6 text-[#008069] animate-spin z-10" />
            </div>
          ) : (
            <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 z-10">
              <Edit2Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => {
              updatePhoto(e.target.files?.[0]);
            }}
            className="hidden"
          />
        </label>
        
        {error && <h2 className="text-red-500">{error}</h2>}
        
        {/* //update name */}
         <div className="flex flex-col bg-white w-full py-4 px-8">
          <label className="text-sm text-[#008069] mb-2">Your Name</label>
          <div className="flex items-center w-full">
            <input
              type="text"
              value={name}
              className="w-full bg-transparent"
              placeholder="Update your name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button onClick={() => updateName(name)}>
              <CheckIcon className="w-5 h-5"></CheckIcon>
            </button>
          </div>
        </div>

         {/* update status */}
         <div className="flex flex-col bg-white w-full py-4 px-8">
          <label className="text-sm text-[#008069] mb-2">Your Status</label>
          <div className="flex items-center w-full">
            <input
              type="text"
              value={status}
              className="w-full bg-transparent"
              placeholder="Update your status..."
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
            <button onClick={() => updateStatus(status)}>
              <CheckIcon className="w-5 h-5"></CheckIcon>
            </button>
          </div>
        </div>
        

        {/* <h2>{userData.name}</h2>
        <h2>{userData.status}</h2>
        <h2>{userData.email}</h2> */}
        <button
          onClick={handleLogOut}
          className="text-white px-4 py-3 rounded bg-[#04a784] hover:bg-[#008069]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
