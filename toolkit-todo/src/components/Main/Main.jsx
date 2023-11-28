import React from "react";
import MainForm from "./MainForm";
import MainTodoListArea from "./MainTodoListArea";

const TODO_SECTION = [
  { text: "해야할일", isDoneValue: false },
  { text: "완료한일", isDoneValue: true },
];
const Main = () => {
  return (
    <div>
      <MainForm />
      {TODO_SECTION.map((section) => (
        <MainTodoListArea key={section.text} section={section} />
      ))}
    </div>
  );
};

export default Main;
