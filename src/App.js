import Container from "./components/GlobalStyles/Container/Container";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <Header />
        <Todos />
      </Container>
    </div>
  );
}

export default App;
