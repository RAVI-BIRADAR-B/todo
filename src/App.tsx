import React, { useState } from 'react';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components//TodoList';
import './App.css';



const initialtodos: Array<Todo> = [
 
];

const App: React.FC = () => {
  let [todos, setTodos] = useState(initialtodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }
  
 

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }])
  }
 
  return (
   
      <div className="container" >
      <AddTodoForm addTodo={addTodo} />
      
      <TodoList  todos={todos} toggleTodo={toggleTodo}   />

      </div>
    
  );
}

export default App;
