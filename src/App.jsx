import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import "./App.css";
import TodoItems from "./components/TodoItems";
import AddItems from "./components/AddItems";
import Container from "./components/Container";
import WelcomeNote from "./components/WelcomeNote";
import  TodoItemsContextProvider  from "./store/todoItems-store";



function App()  {

  return (
      <TodoItemsContextProvider>
      <Container>    
      <Heading></Heading>
      <WelcomeNote ></WelcomeNote>
      <AddItems ></AddItems>
      <TodoItems ></TodoItems>
      </Container>
      </TodoItemsContextProvider>
  );
}

export default App;
