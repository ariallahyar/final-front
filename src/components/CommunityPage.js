import React, { useEffect, useState } from "react";
import Recommend from "./Recommend";
import styled from "styled-components";
import Login from "./Login";
import { getRecommendations } from "../api/recommendations";

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
          <Recommend authorized={authorized} setRecommendations={setRecommendations} />
        ) : (
          <Login setAuthorized={setAuthorized} />
        )}
      </Form>
    </Container>
  );
};

export default CommunityPage;
