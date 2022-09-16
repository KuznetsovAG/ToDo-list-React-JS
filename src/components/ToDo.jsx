import React from 'react';

function ToDo({ todo, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div className={todo.complete ? 'item-text strike' : 'item-text'}>{todo.task}</div>
      <button type="button" className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </button>
    </div>
  );
}

export default ToDo;
