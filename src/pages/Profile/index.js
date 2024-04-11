import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { PROFILE_LIST } from "../../mockData/loginProfile";

const ProfilePage = () => {
  
  const { profile, onLogout } = useAuth();
  const userProfile=PROFILE_LIST.find((user)=>user.email === profile.email);
  const handleLogout=()=>{
    onLogout();
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {userProfile.firstName} {userProfile.lastName}!</p>
      <p>Email: {userProfile.email}</p>
      <p>Username: {userProfile.userName}</p>
      <button onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </button>
    </div>
  );
};

export default ProfilePage;
