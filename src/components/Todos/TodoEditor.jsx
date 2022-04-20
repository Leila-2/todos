import { useState } from "react";
import { toast } from "react-toastify";
import { todosActions } from "../../redux/todos";
import { useDispatch } from "react-redux";

export default function TodoEditor() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  console.log(message);

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
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      dispatch(todosActions.addTodo(message));
      console.log("Key Up");
    }
  };

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        autoFocus
        placeholder="What needs to be done ?"
        maxLength="64"
        onKeyUp={handleKeyUp}
        type="text"
        value={message}
        onChange={handleChange}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
