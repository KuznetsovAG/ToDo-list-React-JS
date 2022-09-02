import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userImput, setUserImput] = useState("");

  const handleChange = (e) => {
    setUserImput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userImput);
    setUserImput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userImput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={"Введите значение ..."}
      />
      <button>Сохранить</button>
    </form>
  );
};

export default ToDoForm;
