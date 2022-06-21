import React from "react";
import { cityIcon, websiteIcon } from "../assets/icons";
import styled from "styled-components";

const Article = styled.article(
  ({ theme }) => `
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  border: 3px solid ${theme.colors.backgroundLight};
  // box-shadow: 6px 6px  ${theme.colors.backgroundLight};

  h3 {
    color: ${theme.colors.secondary};
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSizes.xlarge};
    font-weight: 700;
    margin-bottom: 5px;
  }
`
);

const Grid = styled.div(
  ({ theme }) => `

  display: grid;
  grid-template-columns: 28px 1fr;

  p, a {
    font-size: ${theme.fontSizes.small};
  }
`
);

const Details = styled.p(
  ({ theme }) => `
  margin-top: 10px;
  font-weight: 500;
`
);

const RecommendationCard = ({ _id, nameOfPlace, city, website, comment }) => {
  return (
    <Article key={_id}>
      <h3>{nameOfPlace}</h3>
      <Grid>
        <p>{cityIcon}</p>
        <p>{city}</p>
        <p>{websiteIcon}</p>
        <a href={website} target={"_blank"} rel="noreferrer">
          {website}
        </a>
      </Grid>
      <Details>{comment}</Details>
    </Article>
  );
};

export default RecommendationCard;
