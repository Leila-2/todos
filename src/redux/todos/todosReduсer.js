import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateCheckbox,
} from "./todosOperations";

const initialState = { total: 0, items: [] };

const entities = createReducer(initialState, {
  [getTodos.fulfilled]: (state, { payload }) => {
    // return [...state, ...payload];
    state.total = payload.total;
    state.items.push(...payload.result);
  },
  [addTodo.fulfilled]: (state, { payload }) => {
    state.total++;
    state.items.unshift(payload);
  },
  [deleteTodo.fulfilled]: (state, { payload }) => {
    state.total--;
    state.items = state.items.filter(({ _id }) => _id !== payload);
  },

  [updateCheckbox.fulfilled]: (state, { payload }) => {
    const todo = state.items.find((todo) => todo._id === payload._id);
    todo.done = payload.done;
  },
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
