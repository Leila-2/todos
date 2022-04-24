import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { todosOperations } from "../../redux/todos";
import { useDispatch } from "react-redux";
import { StyledTodoEd } from "./Todo.styled";

export default function TodoEditor() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "") {
      toast.warning("Create todo");
      return;
    }

    dispatch(todosOperations.addTodo(message));
    setMessage("");
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
    }
  };

  return (
    <>
      <ToastContainer />
      <StyledTodoEd
        className="TodoEditor"
        onKeyUp={handleKeyUp}
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          autoFocus
          placeholder="What"
          maxLength="64"
          type="text"
          value={message}
          onChange={handleChange}
        />
        <button type="submit">Add todo</button>
      </StyledTodoEd>
    </>
  );
}
