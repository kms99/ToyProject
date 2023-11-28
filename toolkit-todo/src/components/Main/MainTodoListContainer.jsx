import React from "react";
import { useSelector } from "react-redux";
import MainTodoCard from "./MainTodoCard";
import styled from "styled-components";

const MainTodoListContainer = ({ isDone }) => {
  const allTodoList = useSelector((state) => state.todo.todoList);
  const filteredTodoList = allTodoList.filter((todo) => todo.isDone === isDone);

  return (
    <>
      {filteredTodoList.length === 0 && (
        <StEmptyListH2>리스트가 없습니다.</StEmptyListH2>
      )}
      <ul>
        {filteredTodoList.map((todo) => (
          <MainTodoCard key={todo.id} value={todo} />
        ))}
      </ul>
    </>
  );
};

const StEmptyListH2 = styled.h2`
  font-size: 1.8rem;
`;
export default MainTodoListContainer;
