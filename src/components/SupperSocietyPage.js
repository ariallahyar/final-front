import React from "react";
import styled from "styled-components";

const Section = styled.section`
  * {
    margin: 0;
  }

  h2 {
    font-size: 38px;
    margin-top: 20px;
    text-transform: uppercase;
    color: rgb(0, 50, 50);
  }

  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  width: 600px;
  margin: 0 auto;

  h3 {
    color: rgb(0, 50, 50);
    margin: 20px 0 5px 0;
  }

  p {
  }
`;

const SupperSocietyPage = () => {
  return (
    <Section>
      <h2>Supper Society</h2>
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
      <p>Dinner guests split the grocery costs with the other diners. Costs vary per occasion.</p>
      <h3>What about drinks?</h3>
      <p>To accommodate all preferences, guests are asked to BYOB or whatever floats their boat.</p>
      <h3>I'm in 🙌 Keep me updated!</h3>
      <form>
        <input id={"signup"} type="email" placeholder="test@example.com" required />
        <button type="submit">Sign up</button>
      </form>
    </Section>
  );
};

export default SupperSocietyPage;
