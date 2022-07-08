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
		width: 250px;
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
      <h2>Hello there</h2>
      <p>
        Welcome to <span>Favoreats</span>. Here will be some text explaining my motivation behind
        why I built this hobby project.
      </p>
      <p>
        Now I am just going to keep typing som more placeholder text to fill up the page and create
        multiple divs.
      </p>
      <p>Thanks for stopping by! </p>
      <img
        src="https://images.unsplash.com/photo-1624813743954-d32f24df6cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzcGJlcnJ5fGVufDB8fDB8fA%3D%3D&w=300&q=80"
        alt="my favorite food"
      />
      <div>
        <h2>{emailIcon}</h2>
        <h2>Let's get in touch</h2>
        <a href="mailto:hellofavoreats@gmail.com">hellofavoreats@gmail.com</a>
      </div>
    </Container>
  );
};

export default AboutPage;
