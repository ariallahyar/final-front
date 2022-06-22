import React, { useEffect, useState } from "react";
import RecommendationForm from "./RecommendationForm";
import Login from "./Login";
import { getRecommendations } from "../api/recommendation";
import RecommendationCard from "./RecommendationCard";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  h2 {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Recommendations = styled.section(
  ({ theme }) => `
  @media (min-width: 768px) {
    height: 88vh;
    padding: 0 20px 0 0;
    overflow-x: scroll;
  }
`
);

const FormContainer = styled.section(
  ({ theme }) => `
  background-color: ${theme.colors.backgroundLight};
  padding: 20px;
`
);

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [authorized, setAuthorized] = useState(localStorage.getItem("Token"));

  useEffect(() => getRecommendations((results) => setRecommendations(results)), []);

  return (
    <Container>
      <Recommendations>
        <h2>Community favorites</h2>
        <p>
          Here is a bit of text explaining what this is all about. Hope you find it interesting.
          I'll just add some more text to see the line break.
        </p>
        {recommendations.map(({ nameOfPlace, city, comment, website, _id, user_id }) => {
          return (
            <RecommendationCard
              key={_id}
              id={_id}
              userId={user_id}
              nameOfPlace={nameOfPlace}
              city={city}
              website={website}
              comment={comment}
              recommendations={recommendations}
              setRecommendations={setRecommendations}
            />
          );
        })}
      </Recommendations>
      <FormContainer>
        {authorized ? (
          <>
            <h3>Submit a recommendation</h3>
            <RecommendationForm authorized={authorized} setRecommendations={setRecommendations} />
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

export default RecommendationsPage;
