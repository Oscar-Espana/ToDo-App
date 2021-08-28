import React, {useState} from 'react'
import './TodoSearch.css'
export const TodoSearch = () => {

    const [searchValue, setSearchValue] = useState('')

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return [
        
        <input
        className="TodoSearch"
        placeholder="Agregar un Todo" 
        value={searchValue}
        onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ]
}
