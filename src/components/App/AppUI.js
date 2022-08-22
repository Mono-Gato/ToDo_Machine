import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";


function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {

    return (
        <React.Fragment>
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />    
            <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />
            <TodoList>
                {error && <p> Hubo un error...</p>}
                {loading && <p> Estamos cargando...</p>}
                {(!loading && !searchedTodos.lenght) && <p> Crea tu primera tarea con el boton +...</p>}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed} 
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />      
        </React.Fragment>
    );
}

export { AppUI }