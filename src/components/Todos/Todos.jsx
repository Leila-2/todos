import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, todosActions } from "../../redux/todos";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getTodos);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(todosActions.getTodos(page));
  }, [dispatch, page]);

  const onNext = () => {
    setPage((page) => (page += 1));
  };
  const onPrev = () => {
    setPage((page) => (page -= 1));
  };
  return (
    <>
      <TodoEditor />
      <TodoList todos={todos} />
      <button onClick={() => onNext()}>Next</button>
      <button onClick={() => onPrev()}>Prev</button>
    </>
  );
}
