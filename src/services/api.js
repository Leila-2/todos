import axios from "axios";

axios.defaults.baseURL = "https://todos-b.herokuapp.com/api";

export async function getAllTodos(page = 1) {
  try {
    const { data } = await axios.get(`/todos?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function createTodo(name) {
  try {
    const { data } = await axios.post("/todos", { name });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id, todo) {
  try {
    const { data } = await axios.post(`/todos/${id}`, { todo });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStatus(id, done) {
  try {
    const { data } = await axios.patch(`/todos/${id}`, { done: done });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function removeTodo(id) {
  try {
    await axios.delete(`/todos/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
}
