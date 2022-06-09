import React, { useState } from "react";

const CommunityForm = () => {
  const [inputValue, setInputValue] = useState("");
  const isAuthorized = false;

  const handleOnSubmit = () => {
    return (event) => {
      event.preventDefault();
      setInputValue("");
      alert("Thanks for submitting!");
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
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          required
        />
        <label htmlFor={"city"}>City*</label>
        <input id={"city"} type={"text"} required />
        <label htmlFor={"comment"}>Comment*</label>
        <input id={"comment"} type={"text"} required />
        <button type="submit" disabled={inputValue === ""}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default CommunityForm;
