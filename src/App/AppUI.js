import React from 'react';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import './App.css';


const AppUI = ({ totalTodos, completedTodos, searchValue, setSearchValue,
    searchedTodos, completeTodo, deleteTodo, loading, error
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
                {loading && <p>Cargando..</p>}
                {error && <p>Ha ocurrido un error</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
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