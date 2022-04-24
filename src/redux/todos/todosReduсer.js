import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateCheckbox,
  update,
} from "./todosActions";

//const initialState = [];

const entities = createReducer([], {
  [getTodos.fulfilled]: (state, { payload }) => {
    return [...state, ...payload];
  },
  [addTodo.fulfilled]: (state, { payload }) => {
    return [payload, ...state];
  },
  [deleteTodo.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [updateCheckbox.fulfilled]: (state, { payload }) =>
    state.map((todo) =>
      todo._id === payload._id ? { ...todo, done: payload.done } : todo
    ),
  [update.fulfilled]: (state, { payload }) =>
    state.map((todo) =>
      todo._id === payload._id ? { ...todo, name: payload.name } : todo
    ),
});

const error = createReducer(null, {
  [getTodos.rejected]: (_, action) => action.payload,
  [getTodos.pending]: () => null,
  [addTodo.rejected]: (_, action) => action.payload,
  [addTodo.pending]: () => null,
  [deleteTodo.rejected]: (_, action) => action.payload,
  [deleteTodo.pending]: () => null,
  [updateCheckbox.rejected]: (_, action) => action.payload,
  [updateCheckbox.pending]: () => null,
});

export default combineReducers({
  entities,
  error,
});
