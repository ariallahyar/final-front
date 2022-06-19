import React, { useState } from "react";
import styled from "styled-components";
import { subscribe } from "../api/subscriber";
import { utensilsIcon, boltIcon, awardIcon } from "../assets/icons";

const Section = styled.section`
  * {
    margin: 0;
    color: rgb(0, 50, 50);
  }

  display: grid;
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    margin-top: 20px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 16px;
    letter-spacing: -0.5px;
    margin: 20px 0 5px 0;
  }

  p {
    line-height: 26px;
  }

  input {
    font-size: 16px;
    border-radius: 3px;
    padding: 3px 10px;
    font-size: 16px;
  }

  form {
    margin: 10px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    color: white;
    background-color: blue;
    padding: 5px 10px;
    font-size: 16px;
    border: none;
    border-radius: 3px;
  }
`;

const ThankYou = styled.div`
  margin: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SupperSocietyPage = () => {
  const [email, setEmail] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    subscribe(email, () => setDidSubmit(!didSubmit));
  };

  return (
    <Section>
      <h2>{utensilsIcon} Supper Society</h2>
      <h3>Why join Supper Society?</h3>
      <p>
        Supper Society brings people together to share their love of food by arranging dining
        opportunities in people's homes. Think of a community-based Sunday supper to look forward to
        each week. Who wouldn't want to be a part of that?
      </p>
      <h3>I can't cook, is that ok?</h3>
      <p>
        The Society is open to both people who love to cook and people who love to eat. There is no
        requirement to host for those that can't be trusted in the kitchen.
      </p>
      <h3>How much does it cost?</h3>
      <p>Dinner guests split grocery costs with the other diners. Costs vary per occasion.</p>
      <h3>What about drinks?</h3>
      <p>To accommodate all preferences, guests are asked to BYOB or whatever floats their boat.</p>
      {didSubmit ? (
        <ThankYou>
          <h3>Thanks for subscribing {awardIcon} Stay tuned!</h3>
        </ThankYou>
      ) : (
        <form onSubmit={handleOnSubmit}>
          <h3>I'm in {boltIcon} Keep me updated!</h3>
          <div>
            <input
              id={"signup"}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@test.com"
              required
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      )}
    </Section>
  );
};

export default SupperSocietyPage;
