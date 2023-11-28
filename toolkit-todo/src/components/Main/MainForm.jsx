import React, { useState } from "react";
import MainFormInput from "./MainFormInput";
import MainFormTextarea from "./MainFormTextarea";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/modules/todo";

const MainForm = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    title: "",
    context: "",
  });

  const onFormEvent = (e) => {
    e.preventDefault();
    if (!userInput.title.trim() || !userInput.context.trim()) {
      window.alert("내용을 모두 입력해주세요");
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: userInput.title,
      context: userInput.context,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setUserInput({ title: "", context: "" });
  };

  return (
    <StForm onSubmit={onFormEvent}>
      <MainFormInput userInput={userInput} setUserInput={setUserInput} />
      <MainFormTextarea userInput={userInput} setUserInput={setUserInput} />
      <button type="submit">등록하기</button>
    </StForm>
  );
};

const StForm = styled.form`
  width: 50%;
  margin: 2rem auto;

  & button {
    width: 100%;
    height: 4.5rem;
    font-size: 2rem;
    font-weight: bold;
    background: unset;
    border: 3px solid #e3eded;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: #e3eded;
      color: #060606;
    }
  }
`;

export default MainForm;
