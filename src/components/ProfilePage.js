import React, { useState } from "react";
import { profileIcon } from "../assets/icons";
import Login from "./Login";
import { logout, deleteAccount } from "../api/user-auth";
import { SubmitButton } from "./Button";
import styled from "styled-components";

const Container = styled.section`
  max-width: 400px;
`;

const ProfilePage = () => {
  const [authorized, setAuthorized] = useState(localStorage.getItem("Token")); 

  const deleteOnSubmit = (event) => {
    event.preventDefault();
    deleteAccount(() => setAuthorized(localStorage.getItem("Token")));
  };

  const logoutOnSubmit = (event) => {
    event.preventDefault();
    logout(() => setAuthorized(localStorage.getItem("Token")));
  };

  if (!authorized)
    return (
      <Container>
        <Login setAuthorized={setAuthorized} />
      </Container>
    );

  return (
    <Container>
      <h2>{profileIcon} Welcome to your profile page</h2>
      <form onSubmit={logoutOnSubmit}>
        <SubmitButton dark label="Log Out" />
      </form>
      <form onSubmit={deleteOnSubmit}>
        <SubmitButton label="Delete Account" />
      </form>
    </Container>
  );
};

export default ProfilePage;
