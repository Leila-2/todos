import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTodos, createTodo, removeTodo } from "../../services/api";
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
      const delTodo = await removeTodo(id);
      console.log(delTodo, "delete todo");
      return delTodo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
