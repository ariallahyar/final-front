import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  color: white;
  background-color: rgb(0, 50, 50);
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const CommunityForm = ({ setRecommendations }) => {
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");

  const token = localStorage.getItem("Token");
  const user_id = "1234"; // user_id needs to be stored as well?

  const isAuthorized = true;

  const sendRecommendation = () => {
    const url = "https://arieats.herokuapp.com/users/auth/recommendation";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", Token: token },
      body: JSON.stringify({ user_id, city, nameOfPlace, comment, website }),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Validation error");
        } else {
          return response.json();
        }
      })
      .then((newRecommendation) => {
        setRecommendations((previousRecs) => [newRecommendation.result, ...previousRecs]);
      })
      .catch((error) => console.log(error));
  };

  const resetForm = () => {
    setNameOfPlace("");
    setCity("");
    setComment("");
    setWebsite("");
  };

  const handleOnSubmit = () => {
    return (event) => {
      event.preventDefault();
      sendRecommendation();
      resetForm();
    };
  };

  if (!isAuthorized) {
    return (
      <Section>
        <h3>Please login to submit a community suggestion</h3>
      </Section>
    );
  }

  return (
    <Section>
      <h3>Form</h3>
      <Form onSubmit={handleOnSubmit()}>
        <label htmlFor={"nameOfPlace"}>Name of place</label>
        <input
          id={"nameOfPlace"}
          type={"text"}
          value={nameOfPlace}
          onChange={(event) => setNameOfPlace(event.target.value)}
          required
        />
        <label htmlFor={"city"}>City</label>
        <input
          id={"city"}
          type={"text"}
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        <label htmlFor={"comment"}>Comment</label>
        <textarea
          id={"comment"}
          type={"text"}
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />
        <label htmlFor={"website"}>Website</label>
        <input
          id={"website"}
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
    </Section>
  );
};

export default CommunityForm;
