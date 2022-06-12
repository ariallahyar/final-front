import React, { useEffect, useState } from "react";
import CommunityForm from "./CommunityForm";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 85vh;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Section = styled.section`
  overflow-x: scroll;
`;

const CommunityPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("https://arieats.herokuapp.com/recommendations")
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Section>
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
      </Section>
      <CommunityForm setRecommendations={setRecommendations} />
    </Container>
  );
};

export default CommunityPage;
