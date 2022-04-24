import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, todosActions } from "../../redux/todos";
import { LoadMoreBtn } from "./Todo.styled";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getTodos);
  const [page, setPage] = useState(1);

  const test = useRef(1);

  useEffect(() => {
    test.current === 0 && dispatch(todosActions.getTodos(page));
    test.current = 0;
  }, [page, dispatch]);

  const loadMore = () => {
    setPage((page) => (page += 1));
  };

  return (
    <>
      <TodoEditor />
      <TodoList todos={todos} />
      {todos.length > 4 && (
        <LoadMoreBtn onClick={() => loadMore()}>Load more</LoadMoreBtn>
      )}
    </>
  );
}
