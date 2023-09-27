import React from "react";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {}
  };
  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <p>this is the profile of: {user && user.email}</p>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default ProfilePage;
