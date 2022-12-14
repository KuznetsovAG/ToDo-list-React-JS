import React, { useEffect, useState } from 'react';

import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo-list')) || []);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} removeTask={removeTask} />
      ))}
    </div>
  );
}

export default App;
