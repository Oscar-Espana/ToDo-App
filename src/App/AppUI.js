import React, { useContext } from 'react';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import './App.css';


const AppUI = () => {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <main className="root">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <p className="AppUI-TodoList-p">Cargando..</p>}
                {error && <p className="AppUI-TodoList-p">Ha ocurrido un error</p>}
                {(!loading && !searchedTodos.length) && <p className="AppUI-TodoList-p">Crea tu primer TODO</p>}
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

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }

        </main>
    );
}

export { AppUI }