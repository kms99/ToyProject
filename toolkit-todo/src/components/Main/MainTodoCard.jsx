import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, doneTodo, editTodo } from "../../redux/modules/todo";
import Button from "./Button";

const MainTodoCard = ({ value }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState({
    title: value.title,
    context: value.context,
  });

  const editToggleHandler = () => {
    setEditMode((prev) => {
      if (prev) {
        setEditValue({
          title: value.title,
          context: value.context,
        });
        return false;
      } else return true;
    });
  };

  const editTitleHandler = (e) => {
    setEditValue((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const editContextHandler = (e) => {
    setEditValue((prev) => {
      return { ...prev, context: e.target.value };
    });
  };

  const editDoneHandler = () => {
    if (window.confirm("내용을 수정하시겠습니까?")) {
      dispatch(editTodo({ id: value.id, editValue }));
      editToggleHandler();
    }
  };

  const deleteBtnClickHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?"))
      dispatch(deleteTodo(value.id));
  };

  const doneBtnClickHandler = () => {
    dispatch(doneTodo(value.id));
  };

  const BUTTON_EDIT = [
    { mode: false, text: "수정하기", handler: editToggleHandler },
    { mode: false, text: "삭제하기", handler: deleteBtnClickHandler },
    {
      mode: false,
      text: value.isDone ? "취소하기" : "완료하기",
      handler: doneBtnClickHandler,
    },
    { mode: true, text: "수정완료", handler: editDoneHandler },
    { mode: true, text: "수정취소", handler: editToggleHandler },
  ];

  return (
    <StCardList>
      {editMode ? (
        <div>
          <input value={editValue.title} onChange={editTitleHandler} />
          <textarea value={editValue.context} onChange={editContextHandler} />
        </div>
      ) : (
        <div>
          <h2>{value.title}</h2>
          <p>{value.context}</p>
        </div>
      )}
      <div>
        {BUTTON_EDIT.filter((btn) => btn.mode === editMode).map((btn) => (
          <Button key={btn.text} info={btn} />
        ))}
      </div>
    </StCardList>
  );
};

const StCardList = styled.li`
  padding: 1.5rem 2rem;
  background: #091f2f;
  border-radius: 5px;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
  }
  & div:first-child {
    display: flex;
    flex-direction: column;
    width: 50%;
    & h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    & p {
      font-size: 2rem;
      height: auto;
      white-space: pre-line;
    }
    & input {
      height: 3rem;
      font-size: 2.5rem;
      background: transparent;
      border: none;
      border-bottom: 2px solid #e3eded;
      color: inherit;
      outline: none;
      margin-bottom: 1rem;
    }
    & textarea {
      font-size: 2rem;
      height: 10rem;
      color: inherit;
      background: transparent;
      border: 1px solid #e3eded;
      outline: none;
      resize: none;
      font-family: inherit;
    }
  }
`;

export default MainTodoCard;
