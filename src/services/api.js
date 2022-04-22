import axios from "axios";

axios.defaults.baseURL = "https://todos-b.herokuapp.com/api";

export async function getAllTodos() {
  try {
    const { data } = await axios.get("/todos");
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function createTodo(name) {
  try {
    const { data } = await axios.post("/todos", { name });
    //console.log(data, "res");
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
    console.log("Its done", done, "Its an id", id);
    const { data } = await axios.patch(`/todos/${id}`, { done: done });
    console.log(data, "res res");
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
