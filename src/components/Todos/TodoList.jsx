import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, todosActions } from "../../redux/todos";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getTodos);

  useEffect(() => {
    dispatch(todosActions.getTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo._id}>
          <p>{todo.name}</p>
        </li>
      ))}
    </ul>
  );
}
