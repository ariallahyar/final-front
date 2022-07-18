import React from "react";
import { deleteRecommendation } from "../api/recommendation";
import { cityIcon, trashIcon, websiteIcon } from "../assets/icons";
import styled from "styled-components";

const Article = styled.article(
  ({ theme }) => `

  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.backgroundLight};
  box-shadow: 0 2px 6px 0px  ${theme.colors.backgroundLight};
  
  h3 {
    color: ${theme.colors.secondary};
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSizes.xlarge};
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    margin: 15px 0;
  }
`
);

const DetailsGrid = styled.div(
  ({ theme }) => `

  display: grid;
  grid-template-columns: 28px 1fr;

  p, a {
    margin: 0;
    font-size: ${theme.fontSizes.small};
  }
`
);

const AuthorGrid = styled.div(
  ({ theme }) => `

  display: grid;
  grid-template-columns: 1fr 28px;
  align-items: center;
  color: darkgray;
  font-size: ${theme.fontSizes.small};
  
  p {
    margin: 0;
    font-weight: 500; 
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  span {
    font-weight: 800;
  }

  button {
    margin: 0;
 }

  @media (min-width: 768px) {
    button:hover {
      color: rgb(255, 0, 0, 0.8);
    }
  }
`
);

const RecommendationCard = ({ recommendation, setRecommendations }) => {
  const { id, user_id, nameOfPlace, city, website, comment, submittedBy } = recommendation;

  const isUsersOwnRecommendation = user_id === localStorage.getItem("ID");

  const formattedName = submittedBy.charAt(0).toUpperCase() + submittedBy.slice(1);

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
      <h3>{nameOfPlace}</h3>
      <DetailsGrid>
        <p>{cityIcon}</p>
        <p>{city}</p>
        <p>{websiteIcon}</p>
        <a href={website} target={"_blank"} rel="noreferrer">
          {website}
        </a>
      </DetailsGrid>
      <p>{comment}</p>
      <AuthorGrid>
        <p>
          Recommended by <span>{formattedName}</span>
        </p>
        {isUsersOwnRecommendation && <button onClick={confirmToDelete}>{trashIcon}</button>}
      </AuthorGrid>
    </Article>
  );
};

export default RecommendationCard;
