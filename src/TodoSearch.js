import React from "react";
import "./TodoSearch.css"

function TodoSearch() {
    const [stateSearchValue, setStateSearchValue] = React.useState('');
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setStateSearchValue(event.target.value);
    }
    return(
        <input 
            className="TodoSearch"
            placeholder="Cebolla" 
            onChange={onSearchValueChange}
            value={stateSearchValue}
        />
    )
}

export { TodoSearch }