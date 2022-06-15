import React from "react";
import { profile } from "../assets/icons";

const ProfilePage = () => {
  return (
    <section>
      <h2>{profile} Profile details</h2>
      <p>Here are some details</p>
      <button>Logout</button>
    </section>
  );
};

export default ProfilePage;
