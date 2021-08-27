import React from 'react'
import './TodoSearch.css'
export const TodoSearch = () => {

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Agregar un Todo" 
            onChange={onSearchValueChange}
        />
    )
}
