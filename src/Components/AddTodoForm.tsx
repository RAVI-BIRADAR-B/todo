import React, { ChangeEvent, FormEvent, useState } from 'react'

interface AddTodoFormProps {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>('');

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handelSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("")
    };
    return (
        <form>
            <input placeholder="Add your task" type="text"  value={newTodo} onChange={handelChange} />
            <button type="submit" onClick={handelSubmit}>Add Todo</button>
        </form>
    )
}

export default AddTodoForm
