import React, { useState } from "react";
import { createAccount, login } from "../api/user-auth";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Error = styled.p`
  color: red;
`;

const Login = ({ setAuthorized }) => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const signUpOnSubmit = (event) => {
    event.preventDefault();
    createAccount(
      name,
      email,
      password,
      () => setErrorMessage(true),
      () => {
        setIsRegistered(true);
        setAuthorized(true);
      }
    );
    resetForm();
  };

  const loginOnSubmit = (event) => {
    event.preventDefault();
    login(
      email,
      password,
      () => setErrorMessage(true),
      () => setAuthorized(true)
    );
    resetForm();
  };

  return (
    <>
      <h3>{isRegistered ? "Log In" : "Sign Up"}</h3>
      <Form onSubmit={isRegistered ? loginOnSubmit : signUpOnSubmit}>
        {!isRegistered && (
          <>
            <label htmlFor={"name"}>Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </>
        )}
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
          {isRegistered ? "Log In" : "Sign Up"}
        </button>
      </Form>
      <p>
        {isRegistered ? "Don't" : "Already"} have an account?{" "}
        <button onClick={() => setIsRegistered(isRegistered ? false : true)}>
          {isRegistered ? "Sign Up" : "Log In"}
        </button>
      </p>

      {errorMessage && <Error>Email and password do not match</Error>}
    </>
  );
};

export default Login;
