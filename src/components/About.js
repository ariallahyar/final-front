import React from "react";
import { emailIcon } from "../assets/icons";
import styled from "styled-components";

const Container = styled.section(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  max-width: 800px;
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
    min-height: 225px;
    width: 100%;
    background-color: whitesmoke;
		margin: 10px 0;
		align-self: center;
		border-radius: 5px;
    object-fit: cover;
    
    @media (min-width: 768px) {
      min-height: 500px;
    }
	}

	div {
		margin: 20px 0;
    padding: 40px 10px;
    width: 100%;
    align-self: center;
    text-align: center;
    background: ${theme.colors.backgroundLight}; 
    color: ${theme.colors.primary};
  }

`
);

const AboutPage = () => {
  return (
    <Container>
      <h2>Hello there!</h2>
      <p>
        Welcome to <span>Favoreats</span>, a place that provides curated eats sourced from personal
        dining experiences and community contributions.
      </p>
      <p>
        <span>I'm Arianna</span>, the foodie behind Favoreats! I created this site to combine my
        love of food with my journey to learn to program. Instead of creating custom maps to pair
        with rambling emails each time a friend asks for restaurant tips, I was inspired to build
        something useful from my own "data" I've collected over the years.
      </p>
      <img src="https://i.ibb.co/41Tqfmz/pair.jpg" alt="Arianna and Oskar" />
      <p>
        Partially pictured is my taller half, Oskar - a significant contributer to Favoreats. Not
        only is Oskar my partner; he is also my code coach, mentor and personal cheerleader, and
        shares my love of food.
      </p>
      <p>
        Favoreats launched in June 2022 and is in the early stages of development. Over
        time I hope to add features for organizing dinner parties and sharing recipes. Michelin
        stars aren't necessary to eat great food; some of the best meals are enjoyed right at home.
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
