import React from 'react';
import './TodoItem.css';

export const TodoItem = ({text, completed}) => {

    const onComplete =()=>{
        alert(`Ya completaste el todo: ${text}` );
    }

    const onDelete =()=>{
        alert(`Borraste el todo: ${text}`);
    }


    return (
        <li className="TodoItem">
            <span 
                className={`TodoItem-icon ${completed && 'TodoItem-icon-active'}`}
                onClick={onComplete}
            >✔</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p-complete'}`}>{text}</p>
            <span
                className="TodoItem-icon"
                onClick={onDelete}
            >
                ✘
            </span>
        </li>
    );
}
