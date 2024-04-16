import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser, faCog, faHeart } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../assets/images/cat.JPG";
import { useAuth } from "../../context/AuthProvider";
import "./ProfilePages.css";

function ProfileDropdown() {
    const [showMenu, setShowMenu]=useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu);

    }
    
    const { onLogout } = useAuth();
    const handleLogout = () => {
      onLogout();
    };

    return (
        <div className="navbar-menu-item profile-dropdown">
          <button className="profile-dropdown-toggle" onClick={toggleMenu}>
            <img src={profileImage} alt="Profile" className="profile-image"/>
          </button>
          {showMenu && (
            <div className="profile-dropdown-content">
            <button><FontAwesomeIcon icon={faUser} /> Profile</button>
            <button><FontAwesomeIcon icon={faCog} /> Settings</button>
            <button><FontAwesomeIcon icon={faHeart} /> Favorites</button>
            <button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
          </div>
          )}
        </div>
      );
    }

export default ProfileDropdown;
