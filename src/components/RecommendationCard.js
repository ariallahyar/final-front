import React from "react";
import { deleteRecommendation } from "../api/recommendation";
import { cityIcon, trashIcon, websiteIcon } from "../assets/icons";
import styled from "styled-components";

const Article = styled.article(
  ({ theme }) => `
  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 28px;
  border: 1px solid ${theme.colors.backgroundLight};
  box-shadow: 0 2px 6px 0px  ${theme.colors.backgroundLight};
  
  h3 {
    color: ${theme.colors.secondary};
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSizes.xlarge};
    font-weight: 700;
    margin-bottom: 5px;
  }
  
  button {
    color: silver;
    font-size: ${theme.fontSizes.default};
    align-self: flex-start;
    
    &:hover {
      color: rgb(255, 0, 0, 0.8);
    }
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

const RecommendationCard = ({
  id,
  userId,
  nameOfPlace,
  city,
  website,
  comment,
  setRecommendations,
}) => {
  const isUsersOwnRecommendation = userId === localStorage.getItem("ID");

  const confirmToDelete = () => {
    const confirmBox = window.confirm("Are you sure you want to delete your recommendation?");
    if (confirmBox === true) {
      deleteRecommendation(id, (deleted) =>
        setRecommendations(([deleted, ...recommendations]) => recommendations)
      );
    }
  };

  return (
    <Article>
      <div>
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
      </div>
      {isUsersOwnRecommendation && <button onClick={confirmToDelete}>{trashIcon}</button>}
    </Article>
  );
};

export default RecommendationCard;
