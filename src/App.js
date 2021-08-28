import React, { useState } from 'react'

import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import './App.css';

const defaultTodos = [
  { text: 'Leer libros', completed: true },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Hacer compras', completed: false },
]
function App() {

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <main className="root">
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          searchedTodos.map((todo, key) => (
            <TodoItem key={key} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </main>
  );
}

export default App;
