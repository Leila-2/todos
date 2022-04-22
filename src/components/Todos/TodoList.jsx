import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, todosActions } from "../../redux/todos";
import { StyledTodoList } from "./Todo.styled";
import { ReactComponent as Icon } from "../icons/checkbox.svg";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getTodos);

  //const [done, setDone] = useState();

  console.log(todos, "тудухи");
  useEffect(() => {
    dispatch(todosActions.getTodos());
  }, [dispatch]);

  // const handleChange = (check) => {
  //   return !check;
  // };

  const onDeleteTodo = (id) => {
    dispatch(todosActions.deleteTodo(id));
  };
  const onCheckedTodo = (id, done) => {
    console.log(id, "id", done, "done");
    dispatch(todosActions.updateCheckbox({ id, done }));
  };

  return (
    <StyledTodoList>
      {todos?.map((todo) => (
        <li key={todo._id}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              // name="done"
              onChange={() => {
                onCheckedTodo(todo._id, todo.done);
              }}
            />
            <Icon />
          </label>

          {/* <button
            onClick={() => {
              onCheckedTodo(todo._id, todo.done);
            }}
          >
            Check
          </button> */}

          <p>{todo.name}</p>
          <button
            onClick={() => {
              onDeleteTodo(todo._id);
            }}
          >
            Delete todo
          </button>
        </li>
      ))}
    </StyledTodoList>
  );
}
