import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { PROFILE_LIST } from "../../mockData/loginProfile";
import "./Profile.css";

const ProfilePage = () => {
  const { profile, onLogout } = useAuth();
  const userProfile = PROFILE_LIST.find((user) => user.email === profile.email);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile Page</h2>
      </div>
      <div className="profile-info">
        <p>Welcome, {userProfile.firstName} {userProfile.lastName}!</p>
        <p>Email: {userProfile.email}</p>
        <p>Username: {userProfile.userName}</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </button>
    </div>
  );
};

export default ProfilePage;
