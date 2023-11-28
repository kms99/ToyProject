import React from "react";
import MainTodoListContainer from "./MainTodoListContainer";
import styled from "styled-components";

const MainTodoListArea = ({ section }) => {
  return (
    <StCardListAreaDiv>
      <StSectionTitleH2>{section.text}</StSectionTitleH2>
      <MainTodoListContainer isDone={section.isDoneValue} />
    </StCardListAreaDiv>
  );
};

const StSectionTitleH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;
const StCardListAreaDiv = styled.div`
  width: 70%;
  margin: 4rem auto;
`;

export default MainTodoListArea;
