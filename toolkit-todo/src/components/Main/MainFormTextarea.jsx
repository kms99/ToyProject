import React from "react";
import styled from "styled-components";

const MainFormTextarea = ({ userInput, setUserInput }) => {
  const contextInputHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, context: e.target.value };
    });
  };
  return (
    <StFormTextareaSection>
      <label htmlFor="context">내용</label>
      <textarea
        id="context"
        placeholder="내용을 입력하세요"
        value={userInput.context}
        onChange={contextInputHandler}
      />
    </StFormTextareaSection>
  );
};

const StFormTextareaSection = styled.section`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  & textarea {
    font-size: 2rem;
    height: 10rem;
    padding: 1rem;
    background-color: unset;
    border: 3px solid #e3eded;
    outline: unset;
    color: inherit;
    font-family: inherit;
    resize: none;
  }
  margin-bottom: 1.5rem;
`;

export default MainFormTextarea;
