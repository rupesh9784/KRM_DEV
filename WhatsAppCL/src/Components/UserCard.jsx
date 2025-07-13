import React from "react";
import {Link}  from "react-router-dom";
function UserCard({userObj}) {
  const { name, profile_pic } = userObj.userData;
  return (
    <Link
      to={`/chat/${userObj.id}`}
      key={userObj.id}
      className="flex gap-4 items-center p-3 m-auto border-b-1 "
    >
      <img
        className="rounded-full h-10 w-10 "
        src={profile_pic || "default_profile_pic.webp"}
        alt="profile pic"
      />
      <h2>{name || "No name Provide"}</h2>
    </Link>
  );
}

export default UserCard;
