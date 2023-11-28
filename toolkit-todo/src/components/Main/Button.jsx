import React from "react";
import styled from "styled-components";

const Button = ({ info }) => {
  return <StButton onClick={info.handler}>{info.text}</StButton>;
};

const StButton = styled.button`
  background: unset;
  color: inherit;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: border 0.3s;
  cursor: pointer;
  &:hover {
    border: 2px solid #e3eded;
  }

  & + button {
    margin-left: 1rem;
  }
`;
export default Button;
