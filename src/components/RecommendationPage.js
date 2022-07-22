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
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    height: calc(100vh - 66px - 40px);
  }
`;

const Recommendations = styled.section(
  ({ theme }) => `
  @media (min-width: 768px) {
    overflow-x: auto;
    padding: 0 20px 0 0;
  }
`
);

const FormContainer = styled.section(
  ({ theme }) => `  
  background-color: ${theme.colors.backgroundLight};
  padding: 20px;
  width: 100%;

  input, textarea {
    border: none;
  }
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
              recommendations={recommendations}
              setRecommendations={setRecommendations}
            />
          );
        })}
      </Recommendations>
      <FormContainer>
        <h3>Submit a recommendation</h3>
        {authorized ? (
          <RecommendationForm authorized={authorized} setRecommendations={setRecommendations} />
        ) : (
          <Login setAuthorized={setAuthorized} />
        )}
      </FormContainer>
    </Container>
  );
};

export default RecommendationsPage;
