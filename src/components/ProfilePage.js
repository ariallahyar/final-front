import React from "react";
import { useNavigate } from "react-router";
import { profileIcon } from "../assets/icons";
import Login from "./Login";

const ProfilePage = () => {
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();

  const deleteAccount = (event) => {
    event.preventDefault();
    const url = "https://arieats.herokuapp.com/users/";
    const id = localStorage.getItem("ID");

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    };

    console.log("hello");

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem("ID");
        localStorage.removeItem("Token");
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };

  if (!token) {
    return <Login />;
  }

  return (
    <section>
      <h2>{profileIcon} Welcome to your profile page</h2>
      <form onSubmit={() => localStorage.removeItem("Token")}>
        <button type="submit">Log Out</button>
      </form>
      <form onSubmit={deleteAccount}>
        <button type="submit">Delete Account</button>
      </form>
    </section>
  );
};

export default ProfilePage;
