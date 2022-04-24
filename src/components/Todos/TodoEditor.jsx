import { useState } from "react";
import { toast } from "react-toastify";
import { todosActions } from "../../redux/todos";
import { useDispatch } from "react-redux";
import { StyledTodoEd } from "./Todo.styled";

export default function TodoEditor() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (message === "") {
      toast.warning("Create todo");
    }
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "") {
      toast.warning("Create todo");
    }

    dispatch(todosActions.addTodo(message));
    setMessage("");
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      console.log("Key Up");
    }
  };

  return (
    <StyledTodoEd
      className="TodoEditor"
      onKeyUp={handleKeyUp}
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        autoFocus
        placeholder="What needs to be done ?"
        maxLength="64"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <button type="submit">Add todo</button>
    </StyledTodoEd>
  );
}
