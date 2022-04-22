import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTodos,
  createTodo,
  removeTodo,
  updateStatus,
} from "../../services/api";
//removeTodo, updateStatus, updateTodo, createTodo

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getAllTodos();
      console.log(todos);
      return todos;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/createTodos",
  async (item, { rejectWithValue }) => {
    try {
      console.log(item, "item");
      const todo = await createTodo(item);
      console.log(todo, "xxxx");
      return todo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id, "id");
      await removeTodo(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCheckbox = createAsyncThunk(
  "todos/updateStatus",
  async ({ id, done }, { rejectWithValue }) => {
    // const { id, done } = data;
    try {
      console.log(id, "Its an id", done, "done");
      const res = await updateStatus(id, done);
      console.log(res, "Its a res");
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
