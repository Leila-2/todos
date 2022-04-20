import Container from "./components/GlobalStyles/Container/Container";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
//import { updateStatus, createTodo } from './services/api'
import Header from "./components/Header/Header";
import TodoEditor from "./components/Todos/TodoEditor";
import TodoList from "./components/Todos/TodoList";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <Header />
        <TodoEditor />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
