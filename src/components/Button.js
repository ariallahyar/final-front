import React from "react";
import styled from "styled-components";

const StyledButton = styled.button(
  ({ theme, dark }) => `
  color: ${dark ? theme.colors.btnDarkText : theme.colors.btnLightText};
  border: 2px solid ${dark ? theme.colors.btnDarkBorder : theme.colors.btnLightBorder};
  padding: 3px 10px;
  background-color: ${dark ? theme.colors.btnDarkFill : theme.colors.btnLightFill};
  text-decoration: none;

  &:enabled:hover {
    color: ${dark ? theme.colors.btnLightText : theme.colors.btnLightText};
    background-color: ${dark ? theme.colors.btnLightFill : theme.colors.btnLightFill};
    border: 2px solid ${theme.colors.btnDarkBorder};
  }

  &:disabled {
    opacity: 0.5;
  }
`
);

export const SubmitButton = ({ dark, disabled, label }) => {
  return (
    <StyledButton dark={dark} type="submit" disabled={disabled}>
      {label}
    </StyledButton>
  );
};
