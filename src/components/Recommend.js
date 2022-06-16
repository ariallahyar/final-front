import React, { useState } from "react";
import Login from "./Login";
import { sendRecommendation } from "../api/recommendations";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Recommend = ({ setRecommendations }) => {
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");

  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("ID");

  const resetForm = () => {
    setNameOfPlace("");
    setCity("");
    setComment("");
    setWebsite("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    sendRecommendation(user_id, city, nameOfPlace, comment, website, (newRec) =>
      setRecommendations((previousRecs) => [newRec, ...previousRecs])
    );
    resetForm();
  };

  if (!token) return <Login />;

  return (
    <>
      <h3>Form</h3>
      <Form onSubmit={handleOnSubmit}>
        <label htmlFor="nameOfPlace">Name of place</label>
        <input
          id="nameOfPlace"
          type="text"
          value={nameOfPlace}
          onChange={(event) => setNameOfPlace(event.target.value)}
          required
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          type="text"
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          placeholder="https://example.com"
          pattern="https://.*"
          required
        />
        <button type="submit" disabled={!city || !nameOfPlace || !website || !comment}>
          Submit
        </button>
      </Form>
    </>
  );
};

export default Recommend;
