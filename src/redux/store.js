import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "./todos/todosReduser";

export const store = configureStore({
  reducer: {
    todos: todosReduser,
  },
});
