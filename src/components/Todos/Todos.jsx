import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosSelectors, todosOperations } from "../../redux/todos";
import { LoadMoreBtn } from "./Todo.styled";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { ToastContainer } from "react-toastify";

export default function Todos() {
  const dispatch = useDispatch();
  const { total, items } = useSelector(todosSelectors.getTodos);
  const [page, setPage] = useState(1);

  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current && dispatch(todosOperations.getTodos(page));
    firstRender.current = false;
    page > 1 && dispatch(todosOperations.getTodos(page));
  }, [page, dispatch]);

  const loadMore = () => {
    setPage((page) => (page += 1));
  };

  return (
    <>
     
      <TodoEditor />
      <TodoList todos={items} />
      {items.length !== total && (
        <LoadMoreBtn onClick={() => loadMore()}>Load more</LoadMoreBtn>
      )}
    </>
  );
}
