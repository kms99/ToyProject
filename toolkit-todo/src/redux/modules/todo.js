import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return { ...todoItem, ...action.payload.editValue };
        } else return todoItem;
      });
    },
    doneTodo: (state, action) => {
      state.todoList = state.todoList.map((todoItem) => {
        if (todoItem.id === action.payload) {
          return { ...todoItem, isDone: todoItem.isDone ? false : true };
        } else return todoItem;
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, doneTodo } = todoSlice.actions;
