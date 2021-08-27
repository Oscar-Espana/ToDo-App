import React from 'react';
import './TodoItem.css';

export const TodoItem = ({text, completed}) => {
    return (
        <li className="TodoItem">
            <span className={`TodoItem-icon ${completed && 'TodoItem-icon-active'}`}>✔</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p-complete'}`}>{text}</p>
            <span className="TodoItem-icon">✘</span>
        </li>
    );
}
