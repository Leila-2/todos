import { useDispatch } from "react-redux";
import { todosActions } from "../../redux/todos";
import { StyledTodoList } from "./Todo.styled";
import { ReactComponent as Icon } from "../icons/checkbox.svg";

export default function TodoList({ todos }) {
  const dispatch = useDispatch();

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
          <div>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                // name="done"
                onChange={() => {
                  onCheckedTodo(todo._id, !todo.done);
                }}
              />
              <Icon />
            </label>

            <p>{todo.name}</p>
          </div>

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
