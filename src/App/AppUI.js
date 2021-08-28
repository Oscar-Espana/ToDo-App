import React from 'react';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import './App.css';


const AppUI = ({ totalTodos, completedTodos, searchValue, setSearchValue,
    searchedTodos, completeTodo, deleteTodo
}) => {

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
                        <TodoItem key={key}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))
                }
            </TodoList>
            <CreateTodoButton />
        </main>
    );
}

export { AppUI }