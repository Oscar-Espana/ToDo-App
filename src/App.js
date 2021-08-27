import './App.css';
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  { text: 'Leer libros', completed: true },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Hacer compras', completed: false },
]
function App() {
  return (
    <main className="root">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map((todo, key) => (
            <TodoItem key={key} text={todo.text} completed={todo.completed}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </main>
  );
}

export default App;
