import {
    // ArrowLeft,
  CircleFadingPlusIcon,
  MessageSquare,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Profile from "./Profile";
import UserCard from "./UserCard";
import { useAuth } from "./AuthContext";

function ChatPanel() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {userData} = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery , setSearchQuery] = useState();

  useEffect(() => {
    const getUser = async () => {
      const userCollection = collection(db, "users");
      const userList = await getDocs(userCollection);
      const UserArr = userList.docs.map((docs) => {
        return {
          userData: docs.data(),
          id: docs.id,
        };
      });

      setUsers(UserArr);
      setIsLoading(false);
    };
    getUser();
  }, []);

  //   if (isLoading) return <div>...loading</div>;

  const goBack = () => setShowProfile(true);
  const goHome = () => setShowProfile(false);

  let filteredUsers = users;
  if(searchQuery){
    filteredUsers = users.filter((user)=>
      user.userData.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );
  }


//break till 9;12
  //profile
  if (showProfile == true) {
    return (
      <Profile goHome={goHome}/>
    );
  }

  //chat panel
  return (
    <div className="w-[30vw] bg-white" >
      {/* leftside top bar */}
      <div className="flex bg-gray-400 p-4 gap-2 justify-between items-center">
        <button onClick={goBack}>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={userData?.profile_pic ||  "/default_profile_pic.webp"}
            alt="user profile pic"
          />
        </button>
        <div className="flex gap-6 items-end">
          <CircleFadingPlusIcon />
          <MessageSquare />
          <UserRoundIcon />
        </div>
      </div>
      {/* chatlist */}
      {isLoading ? (
        <div>...loading</div>
      ) : (
        //search list
        <div className="bg-white py-2 px-3">
          <div className="bg-background flex items-center gap-4 px-3 py-2 rounded-lg border-1">
            <SearchIcon className="w-4 h-4" />
            <input
              className="bg-background focus-within:outline-none"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

        <div>
          {filteredUsers.map((userObj) => {
            return <UserCard key={userObj.id} userObj={userObj} />
          })}
        </div>
        </div>
      )}
    </div>
  );
}

export default ChatPanel;
