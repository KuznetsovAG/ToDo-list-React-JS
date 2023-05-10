import React, { FC, useState } from 'react';

interface ToDoFormProps {
  addTask: (userInput:string) => void
}

const ToDoForm: FC<ToDoFormProps> = ({ addTask }) => {
  const [userImput, setUserImput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserImput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent) => {
    e.preventDefault();
    addTask(userImput);
    setUserImput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <input
        value={userImput}
        type="text"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        placeholder="Введите значение ..."
      />
      <button type="button" className="button" onClick={handleSubmit}>
        Сохранить
      </button>
      </div>
  );
}

export default ToDoForm;
