import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosReduсer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
