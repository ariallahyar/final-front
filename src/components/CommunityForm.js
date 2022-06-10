import React, { useState } from "react";

const CommunityForm = ({ setRecommendations }) => {
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");

  const token = localStorage.getItem("Token");

  // user_id needs to be stored as well?
  const user_id = "1234";

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

  const handleOnSubmit = () => {
    return (event) => {
      event.preventDefault();
      sendRecommendation();
    };
  };

  if (!isAuthorized) {
    return <h2>Please login to submit a community suggestion</h2>;
  }

  return (
    <section>
      <h3>Form</h3>
      <form className={"entryForm"} onSubmit={handleOnSubmit()}>
        <label htmlFor={"nameOfPlace"}>Name of place*</label>
        <input
          id={"nameOfPlace"}
          type={"text"}
          value={nameOfPlace}
          onChange={(event) => setNameOfPlace(event.target.value)}
          required
        />
        <label htmlFor={"city"}>City*</label>
        <input
          id={"city"}
          type={"text"}
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        <label htmlFor={"comment"}>Comment*</label>
        <input
          id={"comment"}
          type={"text"}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />
        <label htmlFor={"website"}>Website*</label>
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
      </form>
    </section>
  );
};

export default CommunityForm;
