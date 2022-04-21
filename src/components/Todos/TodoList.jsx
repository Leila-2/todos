import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, todosActions } from "../../redux/todos";
import { StyledTodoList } from "./Todo.styled";
import { ReactComponent as Icon } from "../icons/checkbox.svg";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getTodos);

  const [done, setDone] = useState();

  console.log(todos, "тудухи");
  useEffect(() => {
    dispatch(todosActions.getTodos());
  }, [dispatch]);

  const handleChange = (check) => {
    return !check;
  };
  return (
    <StyledTodoList>
      {todos?.map((todo) => (
        <li key={todo._id}>
          <input type="checkbox" name="checkbox" />
          <Icon />

          <p>{todo.name}</p>
        </li>
      ))}
    </StyledTodoList>
  );
}
