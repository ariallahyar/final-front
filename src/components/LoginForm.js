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

const LoginForm = () => {
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
        console.log(data);
        localStorage.setItem("token", data.token);
      })
      .catch((error) => console.log(error));
  };

  const handleOnSubmit = () => {
    return (event) => {
      event.preventDefault();
      console.log(email, password);
      loginUser();
      resetForm();
      alert("you're logged in");
    };
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
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
        Don't have an account? <Link to="/profile">Sign up</Link>
      </p>
      {errorMessage && <Error>Email and password do not match</Error>}
    </>
  );
};

export default LoginForm;
