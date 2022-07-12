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
    height: 90vh;
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
          Below are community-curated favorites. Do you have a go-to cafe to sit down with a cup of
          coffee and a good book? Or maybe there's that one restaurant that you always take vistors
          to to impress when they're in town? Whatever it is, share your favorite spots and help
          grow our community!
        </p>
        {recommendations.map((recommendation) => {
          return (
            <RecommendationCard
              key={recommendation._id}
              recommendation={recommendation}
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
