import React, { useState } from "react";
import { createAccount, login } from "../api/user-auth";
import { SubmitButton } from "./Button";
import styled from "styled-components";

const Error = styled.p`
  color: red;
`;

const Login = ({ setAuthorized }) => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorBadCredentials, setErrorBadCredentials] = useState(false);
  const [errorEmailExists, setErrorEmailExists] = useState(false);

  const resetErrors = () => {
    setErrorEmailExists(false);
    setErrorBadCredentials(false);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const signUpOnSubmit = (event) => {
    event.preventDefault();
    resetErrors();
    createAccount(
      name,
      email,
      password,
      () => setErrorEmailExists(true),
      () => {
        setIsRegistered(true);
        setAuthorized(true);
      }
    );
    resetForm();
  };

  const loginOnSubmit = (event) => {
    event.preventDefault();
    resetErrors();
    login(
      email,
      password,
      () => setErrorBadCredentials(true),
      () => setAuthorized(true)
    );
    resetForm();
  };

  const onFormToggle = () => {
    resetErrors();
    setIsRegistered(isRegistered ? false : true);
  };

  return (
    <>
      <h3>{isRegistered ? "Log In" : "Sign Up"}</h3>
      <form onSubmit={isRegistered ? loginOnSubmit : signUpOnSubmit}>
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
          placeholder="example@domain.com"
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
        <SubmitButton
          dark
          disabled={!password || !email}
          label={isRegistered ? "Log In" : "Sign Up"}
        />
      </form>
      <p>
        {isRegistered ? "Don't" : "Already"} have an account?{" "}
        <button onClick={onFormToggle}>{isRegistered ? "Sign Up" : "Log In"}</button>
      </p>

      {errorBadCredentials && <Error>Email and password do not match</Error>}
      {errorEmailExists && <Error>Email already exists</Error>}
    </>
  );
};

export default Login;
