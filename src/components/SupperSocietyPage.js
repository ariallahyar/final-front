import React, { useState } from "react";
import styled from "styled-components";
import { subscribe } from "../api/subscriber";
import { boltIcon, awardIcon } from "../assets/icons";
import { SubmitButton } from "./Button";

const Image = styled.div`
  align-self: center;
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 225px;
  background-color: whitesmoke;
  width: 100%;

  img {
    position: relative;
    opacity: 0.4;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    z-index: 1;
    font-size: 42px;
    text-shadow: 0px 0px 5px white;
  }

  @media (min-width: 768px) {
    min-height: 350px;
    max-height: 350px;

    h2 {
      font-size: 72px;
    }
  }
`;
const Section = styled.section(
  ({ theme }) => `
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  h2, i {
    color: ${theme.colors.primary};
    align-self: center;
    font-family: ${theme.fontFamily.title};
    text-transform: uppercase;
  }
  
  h3 {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.large};
    letter-spacing: -0.5px;
    margin: 20px 0 5px 0;
  }
  
  p {
    text-align: left;
  }
  
  form {
    color: ${theme.colors.primary};
    margin: 20px 0;
    padding: 40px 10px;
    width: 100%;
    align-self: center;
    text-align: center;
    background: ${theme.colors.backgroundLight};
    
    h3 {
      margin: 0;
      font-weight: bolder;
    }
    
    p {
      margin: 10px 0;
      text-align: center;
    }

    input {
      border: 2px solid white;
      border-radius: 3px 0px 0px 3px;
    }

    button {
      border-radius: 0px 3px 3px 0px;
    }
  }
`
);

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
      <Image>
        <h2>Supper Society</h2>
        <img src="https://i.ibb.co/gRJwYJz/plates.jpg" alt="plates and silverwear" />
      </Image>
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
      <form onSubmit={handleOnSubmit}>
        {didSubmit ? (
          <ThankYou>
            <h3>Thanks for subscribing {awardIcon}</h3>
            <h3>Stay tuned!</h3>
          </ThankYou>
        ) : (
          <>
            <h3>I'm in {boltIcon} Keep me updated!</h3>
            <p>Join Supper Society's email list to be the first to know about upcoming events.</p>
            <div>
              <input
                id={"signup"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@domain.com"
                required
              />
              <SubmitButton dark disabled={!email} label="Subscribe" />
            </div>
          </>
        )}
      </form>
    </Section>
  );
};

export default SupperSocietyPage;
