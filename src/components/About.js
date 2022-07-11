import React from "react";
import { emailIcon } from "../assets/icons";
import styled from "styled-components";

const Container = styled.section(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  h2 {
		align-self: center;
  }
	
	p {
		margin: 5px 0;
	}
	
	span {
		font-weight: bolder;
	}

	img {
		margin: 10px 0;
		align-self: center;
		border-radius: 5px;
	}

	div {
		margin: 20px 0;
    padding: 40px 10px;
    width: 100%;
    align-self: center;
    text-align: center;
    background: ${theme.colors.backgroundLight}; 
`
);

const AboutPage = () => {
  return (
    <Container>
      <h2>About</h2>
      <p>
        Welcome to <span>Favoreats</span>, a place that provides curated eats sourced from personal
        dining experiences and community contributions.
      </p>
      <img src="https://i.ibb.co/NLDPYXy/seattle.jpg" alt="profile of Arianna" border="0" />
      <p>
        <span>I'm Arianna</span>, the foodie behind Favoreats! I created this site to combine a few
        of my interests: eating great food, exploring new areas, sharing knowledge, and, more
        recently, learning to program.
      </p>
      <p>
        Favoreats launched in June 2022 and is currently in the early stages of development. In the
        future I hope to include features for organizing dinner parties and sharing recipes.
        Michelin stars aren't necessary to eat great food; sometimes the best meals are enjoyed
        right at home.
      </p>
      <p>Thanks for stopping by! </p>
      <div>
        <h2>{emailIcon}</h2>
        <h2>Let's get in touch</h2>
        <a href="mailto:hellofavoreats@gmail.com">hellofavoreats@gmail.com</a>
      </div>
    </Container>
  );
};

export default AboutPage;
