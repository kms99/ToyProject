import React from "react";
import styled from "styled-components";

const MainFormInput = ({ userInput, setUserInput }) => {
  const titleInputHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  return (
    <StFormInputSection>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        placeholder="제목을 입력하세요"
        value={userInput.title}
        onChange={titleInputHandler}
      />
    </StFormInputSection>
  );
};

const StFormInputSection = styled.section`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  & input {
    font-size: 2rem;
    height: 4rem;
    padding: 0 1rem;
    background-color: unset;
    border: 3px solid #e3eded;
    outline: unset;
    color: inherit;
  }
  margin-bottom: 1.5rem;
`;

export default MainFormInput;
