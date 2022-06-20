import React from "react";
import styled from "styled-components";

const StyledButton = styled.button(({ theme, inverted }) => `
  color: ${inverted ? theme.colors.buttonTextInverted : theme.colors.buttonText};
  border: 1px solid ${theme.colors.buttonText};
  padding: 3px 10px;
  background-color: ${
    inverted ? theme.colors.buttonBackgroundInverted : theme.colors.buttonBackground
  };
  text-decoration: none;

  &:enabled:hover {
    background-color: ${theme.colors.buttonBackgroundHover};
  }

  &:disabled {
    opacity: 0.5;
  }
`
);

export const SubmitButton = ({ inverted, disabled, label }) => {
  return (
    <StyledButton inverted={inverted} type="submit" disabled={disabled}>
      {label}
    </StyledButton>
  );
};
