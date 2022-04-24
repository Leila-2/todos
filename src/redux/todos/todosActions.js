import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTodos,
  createTodo,
  removeTodo,
  updateStatus,
  updateTodo,
} from "../../services/api";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (page, { rejectWithValue }) => {
    try {
      const todos = await getAllTodos(page);

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
      const todo = await createTodo(item);

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
    try {
      const res = await updateStatus(id, done);

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const update = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, todo }, { rejectWithValue }) => {
    try {
      const res = await updateTodo(id, todo);

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
