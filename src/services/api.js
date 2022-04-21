import axios from "axios";

axios.defaults.baseURL = "https://todos-b.herokuapp.com/api";

export async function getAllTodos() {
  try {
    const { data } = await axios.get("/todos");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function createTodo(name) {
  try {
    const { data } = await axios.post("/todos", { name });
    console.log(data, "res");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id, todo) {
  try {
    const res = await axios.post(`/todos/${id}`, { todo });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStatus(id, done) {
  try {
    const res = await axios.patch(`/todos/${id}`, { done: !done });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function removeTodo(id) {
  try {
    const res = await axios.delete(`/todos/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
