import {
    // ArrowLeft,
  CircleFadingPlusIcon,
  MessageSquare,
  UserRoundIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Profile from "./Profile";
import UserCard from "./UserCard";

function ChatPanel() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showProfile, setShowProfile] = useState(false);

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
            src={"/default_profile_pic.webp"}
            alt=""
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
        <div>
          {users.map((userObj) => {
            return <UserCard key={userObj.id} userObj={userObj} />
          })}
        </div>
      )}
    </div>
  );
}

export default ChatPanel;
