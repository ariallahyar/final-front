import React, { useState } from "react";
import { profileIcon } from "../assets/icons";
import Login from "./Login";
import { logout, deleteAccount } from "../api/user-auth";
import { SubmitButton } from "./Button";

const ProfilePage = () => {
  const [authorized, setAuthorized] = useState(localStorage.getItem("Token"));
  // const [token, setToken] = useState(() => localStorage.getItem("Token"));

  const handleOnSubmit = (event) => {
    event.preventDefault();
    deleteAccount(() => setAuthorized(localStorage.getItem("Token")));
  };

  const handleOnSubmitLogout = (event) => {
    event.preventDefault();
    logout(() => setAuthorized(localStorage.getItem("Token")));
  };

  if (!authorized) return <Login setAuthorized={setAuthorized} />;

  return (
    <section>
      <h2>{profileIcon} Welcome to your profile page</h2>
      <form onSubmit={handleOnSubmitLogout}>
        <SubmitButton dark label="Log Out" />
      </form>
      <form onSubmit={handleOnSubmit}>
        <SubmitButton label="Delete Account" />
      </form>
    </section>
  );
};

export default ProfilePage;
