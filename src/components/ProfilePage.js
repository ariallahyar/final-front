import React, { useState } from "react";
import { profileIcon } from "../assets/icons";
import Login from "./Login";
import { logout, deleteAccount } from "../api/user-auth";

const ProfilePage = () => {
  const [token, setToken] = useState(() => localStorage.getItem("Token"));

  const handleOnSubmit = (event) => {
    event.preventDefault();
    deleteAccount(() => setToken(localStorage.getItem("Token")));
  };

  const handleOnSubmitLogout = (event) => {
    event.preventDefault();
    logout(() => setToken(localStorage.getItem("Token")));
  };

  if (!token) return <Login />;

  return (
    <section>
      <h2>{profileIcon} Welcome to your profile page</h2>
      <form onSubmit={handleOnSubmitLogout}>
        <button type="submit">Log Out</button>
      </form>
      <form onSubmit={handleOnSubmit}>
        <button type="submit">Delete Account</button>
      </form>
    </section>
  );
};

export default ProfilePage;
