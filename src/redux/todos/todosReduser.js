import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getTodos, addTodo, deleteTodo, updateCheckbox } from "./todosActions";

//const initialState = [];

const entities = createReducer([], {
  [getTodos.fulfilled]: (_, action) => action.payload,
  [addTodo.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteTodo.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [updateCheckbox.fulfilled]: (state, { payload }) =>
    //console.log('Its a payload', payload)
    state.map((todo) =>
      todo._id === payload ? { ...todo, done: !todo.done } : todo
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
