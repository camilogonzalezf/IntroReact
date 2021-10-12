import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'


function TodoForm(){

    const [newTodoValue , setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit} className="form">
            <label></label>
            <textarea 
                className="textArea"
                value = {newTodoValue}
                onChange = {onChange}
                placeholder="Cortar la Cebolla para el almuerzo"
            />
            <div className="buttons">
                <button 
                    className="buttonPress"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="buttonPress"
                    type="submit"    
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm }