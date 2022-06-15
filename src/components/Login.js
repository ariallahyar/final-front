import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Error = styled.p`
  color: red;
`;

const SignUpLink = styled(Link)`
  color: white;
`;

const Login = ({ setAuthorized }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const loginUser = () => {
    const url = "https://arieats.herokuapp.com/users/auth";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          setErrorMessage(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        localStorage.setItem("Token", data.token);
        localStorage.setItem("ID", data._id);
        setAuthorized(true);
      })
      .catch((error) => console.log(error));
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleOnSubmit = () => {
    return (event) => {
      event.preventDefault();
      loginUser();
      resetForm();
    };
  };

  return (
    <>
      <h3>Login</h3>
      <Form onSubmit={handleOnSubmit()}>
        <label htmlFor={"email"}>Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@test.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit" disabled={!password || !email}>
          Log In
        </button>
      </Form>
      <p>
        Don't have an account? <SignUpLink to="/profile">Sign up</SignUpLink>
      </p>
      {errorMessage && <Error>Email and password do not match</Error>}
    </>
  );
};

export default Login;
