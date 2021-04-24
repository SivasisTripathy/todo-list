import React from 'react';

//components
import Todo from './Todo';

const TodoList = ({ setTodos, todos, filteredTodos }) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => (
                        <Todo setTodos={setTodos}
                            todos={todos}
                            todo={todo}
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
