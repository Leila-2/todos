import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getTodos, addTodo, deleteTodo } from "./todosActions";

//const initialState = [];

const entities = createReducer([], {
  [getTodos.fulfilled]: (_, action) => action.payload,
  [addTodo.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteTodo.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== console.log(payload)),
});

const error = createReducer(null, {
  [getTodos.rejected]: (_, action) => action.payload,
  [getTodos.pending]: () => null,
  [addTodo.rejected]: (_, action) => action.payload,
  [addTodo.pending]: () => null,
  [deleteTodo.rejected]: (_, action) => action.payload,
  [deleteTodo.pending]: () => null,
});

export default combineReducers({
  entities,
  error,
});
