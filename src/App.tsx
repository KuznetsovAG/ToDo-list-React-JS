import React, { FC } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import { useAppDispatch, useAppSelector } from './hooksApp/hooks';
import { addTodo, removeTodo } from './reducer/TodoReducer';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.TodoReducer);



  const addTask = (userInput:string) => {
    if (userInput.trim()) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      dispatch(addTodo(newItem));
    }
  };

  const removeTask = (id:string) => {
    dispatch(removeTodo(id));
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
