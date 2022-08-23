import React from "react";
import { TodoContext } from "../../context/TodoContext.js";
import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
import { Modal } from "../Modal/Modal.js";
import { TodoForm } from "../TodoForm/TodoForm.js";

import { TodosEmpty } from "../TodosEmpty/TodosEmpty.js";
import { TodosError } from "../TodosError/TodosError.js";
import { TodosLoading } from "../TodosLoading/TodosLoading.js";

function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />    
            <TodoSearch />
            <TodoList>
                {error && <TodosError />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <TodosEmpty />}

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
                
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />      
        </React.Fragment>
    );
}

export { AppUI }