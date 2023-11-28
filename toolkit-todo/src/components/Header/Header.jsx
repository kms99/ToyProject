import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <h1>
        <span>Toolkit</span>을 위한 ToDoList
      </h1>
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  border-bottom: 2px solid #060606;
  cursor: default;

  & h1 {
    font-size: 3rem;
    font-weight: bold;
    & span {
      border-bottom: 2px solid #e3eded;
    }
    &:hover {
      & span {
        color: #d15b54;
        border-color: #d15b54;
      }
    }
  }
`;
export default Header;
