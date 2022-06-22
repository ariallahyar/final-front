import React, { useState } from "react";
import Login from "./Login";
import { sendRecommendation } from "../api/recommendation";
import { starIcon } from "../assets/icons";
import { SubmitButton } from "./Button";

const RecommendationForm = ({ setRecommendations }) => {
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);

  const token = localStorage.getItem("Token");

  const resetForm = () => {
    setNameOfPlace("");
    setCity("");
    setComment("");
    setWebsite("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    sendRecommendation(city, nameOfPlace, comment, website, (newRec) =>
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
            <button onClick={() => setDidSubmit(!didSubmit)}>Let's go</button>
          </span>
        </p>
      </>
    );

  return (
    <>
      <h4>Fill in the following details</h4>
      <form onSubmit={handleOnSubmit}>
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
          required
        />
        <SubmitButton
          dark
          disabled={!city || !nameOfPlace || !website || !comment}
          label={"Submit"}
        />
      </form>
    </>
  );
};

export default RecommendationForm;
