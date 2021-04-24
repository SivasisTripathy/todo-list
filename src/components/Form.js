import React, { useContext } from 'react'

//components
import { FormContext } from "../App"

const Form = () => {
    const { inputText, todos, setTodos, setInputText, setStatus } = useContext(FormContext);
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        }
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option className="opall" value="all">All</option>
                    <option className="opcom" value="completed">Completed</option>
                    <option className="opunc" value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
