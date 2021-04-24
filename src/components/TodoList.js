import React, { useContext } from 'react';

//components
import Todo from './Todo';
import { FormContext } from "../App"

const TodoList = () => {
    const { filteredTodos } = useContext(FormContext);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => (
                        <Todo todo={todo}
                            key={todo.id}
                            text={todo.text}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList
