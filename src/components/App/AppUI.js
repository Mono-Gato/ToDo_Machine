import React from "react";
import { TodoContext } from "../../context/TodoContext.js";
import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";


function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo
        } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />    
            <TodoSearch />
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