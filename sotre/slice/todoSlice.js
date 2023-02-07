import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 0,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: false,
      });
    },
    upDateTodo: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (item) => item.id === action.payload,
      );
      state.todos[itemIndex].state =
        state.todos[itemIndex].state === true ? false : true;
      state.todos.push(state.todos.splice(itemIndex, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (item) => item.id === action.payload,
      );
      if (itemIndex !== -1) {
        state.todos.splice(itemIndex, 1);
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, upDateTodo, deleteTodo } = todoSlice.actions;
