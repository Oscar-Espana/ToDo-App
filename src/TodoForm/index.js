import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

const TodoForm = () => {

    const { addTodo, setOpenModal } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Mensaje del TODO"
                onChange={onChange}
                value={newTodoValue}
                rows={5}
            />
            <div className="TodoForm-button-container">
                <button
                    className="TodoForm-button"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }

