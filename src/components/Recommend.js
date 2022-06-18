import React, { useState } from "react";
import Login from "./Login";
import { sendRecommendation } from "../api/recommendation";
import { starIcon } from "../assets/icons";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  label {
    margin-top: 8px;
    font-size: 14px;
  }

  input {
    margin: 0;
    font-size: 16px;
  }

  button {
    margin-top: 16px;
    border-radius: 5px;
    padding: 5px;
  }
`;

const ButtonInLine = styled.button`
  padding: 5px;
  margin: 0;
  color: inherit;
  background-color: inherit;
  font-family: inherit;
  border: none;
  text-decoration: underline;
  font-size: inherit;
  font-weight: inherits;

  &:hover {
    cursor: pointer;
  }
`;

const Recommend = ({ setRecommendations }) => {
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");
  const [didSubmit, setDidSubmit] = useState(true);

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
    setDidSubmit(true);
  };

  if (!token) return <Login />;

  if (didSubmit)
    return (
      <>
        <h4>Thanks for contributing to our community! {starIcon}</h4>
        <p>
          Do you want to submit another recommendation?
          <span>
            <ButtonInLine onClick={() => setDidSubmit(!didSubmit)}>Let's go</ButtonInLine>
          </span>
        </p>
      </>
    );

  return (
    <>
      <h4>Fill in the following details</h4>
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
