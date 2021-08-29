import { useState } from 'react'
import { AppUI } from './AppUI'

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
    parsedItem=initialValue;
    localStorage.setItem(itemName, JSON.stringify(parsedItem));
  }
  else{
    parsedItem= JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);
  
  const saveItem = (newItem) =>{
    const stringifiedItem=JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[],);
  const [searchValue, setSearchValue] = useState('');
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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
