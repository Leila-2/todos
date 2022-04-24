import { useState } from "react";
import { toast } from "react-toastify";
import { todosActions } from "../../redux/todos";
import { useDispatch } from "react-redux";
import { StyledTodoEd } from "./Todo.styled";

export default function TodoEditor() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "") {
      toast("Create new todo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    dispatch(todosActions.addTodo(message));
    setMessage("");

    // // Просто диспатч происходит слишком быстро, поэтому обернула в сеттаймаут
    // setTimeout(() => {
    //   dispatch(todosActions.getTodos());
    // }, 1000);
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
