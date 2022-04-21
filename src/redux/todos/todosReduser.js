import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getTodos, addTodo } from "./todosActions";

//const initialState = [];

const entities = createReducer([], {
  [getTodos.fulfilled]: (_, action) => action.payload,
  [addTodo.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return [...state, payload];
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
