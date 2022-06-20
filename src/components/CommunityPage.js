import React, { useEffect, useState } from "react";
import Recommend from "./Recommend";
import Login from "./Login";
import { getRecommendations } from "../api/recommendation";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  section {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;

    section {
      height: 88vh;
      margin-bottom: 0;
      overflow-x: scroll;
    }
  }
`;

const FormContainer = styled.section(({ theme }) => `
  color: white;
  background-color: ${theme.colors.primary};
  padding: 20px;
`
);

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
      <FormContainer>
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
      </FormContainer>
    </Container>
  );
};

export default CommunityPage;
