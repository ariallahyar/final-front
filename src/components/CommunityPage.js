import React, { useEffect, useState } from "react";
import Recommend from "./Recommend";
import Login from "./Login";
import { getRecommendations } from "../api/recommendation";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 88vh;

  section {
    overflow-x: scroll;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Form = styled.section`
  color: white;
  background-color: rgb(0, 50, 50);
  padding: 15px;
`;

const CommunityPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [authorized, setAuthorized] = useState(localStorage.getItem("Token"));

  useEffect(() => getRecommendations((results) => setRecommendations(results)), []);

  return (
    <Container>
      <section>
        <h2>Community favorites</h2>
        {recommendations.map(({ nameOfPlace, city, comment, website, _id }) => {
          return (
            <article key={_id}>
              <h4>{nameOfPlace}</h4>
              <p>{city}</p>
              <p>{comment}</p>
              <a href={website} target={"_blank"} rel="noreferrer">
                {website}
              </a>
            </article>
          );
        })}
      </section>
      <Form>
        {authorized ? (
          <>
            <h3>Submit a recommendation</h3>
            <Recommend authorized={authorized} setRecommendations={setRecommendations} />
          </>
        ) : (
          <>
            <h3>Log in to submit a recommendation</h3>
            <Login setAuthorized={setAuthorized} />
          </>
        )}
      </Form>
    </Container>
  );
};

export default CommunityPage;
