import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getTodos, addTodo } from "./todosActions";

const entities = createReducer([], {
  [getTodos.fulfilled]: (state, { payload }) => {
    return { ...state, todos: payload };
  },
  [addTodo.fulfilled]: (state, { payload }) => {
    return { ...state, todo: payload };
  },
});

const error = createReducer(null, {
  [getTodos.rejected]: (_, action) => action.payload,
  [getTodos.pending]: () => null,
  [addTodo.rejected]: (_, action) => action.payload,
  [addTodo.pending]: () => null,
});

export default combineReducers({
  entities,
  error,
});
