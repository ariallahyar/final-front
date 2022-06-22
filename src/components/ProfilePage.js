import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { logout, deleteAccount } from "../api/user-auth";
import { SubmitButton } from "./Button";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    align-self: center;
    margin-bottom: 20px;
  }

  a {
    font-weight: 500;
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  color: grey;
  text-decoration: none;

  &:hover {
    font-weight: 600;
    color: rgb(255, 0, 0, 0.8);
  }
`;

const ProfilePage = () => {
  const [authorized, setAuthorized] = useState(localStorage.getItem("Token"));

  const confirmToDelete = () => {
    const confirmBox = window.confirm("Do you really want to delete your account?");
    if (confirmBox === true) {
      deleteAccount(() => setAuthorized(localStorage.getItem("Token")));
    }
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
      <h2>Welcome to your profile page</h2>
      <p>
        Check out our <Link to="/community">Community</Link> page to submit your own recommendation!
        This profile page will be further developed along with{" "}
        <Link to="/society">Supper Society</Link>.
      </p>
      <form onSubmit={logoutOnSubmit}>
        <SubmitButton dark label="Log Out" />
      </form>
      <DeleteButton onClick={confirmToDelete}>Delete Account</DeleteButton>
    </Container>
  );
};

export default ProfilePage;
