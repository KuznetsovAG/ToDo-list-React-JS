import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoTypes } from '../types/TodoType';

interface initTodo {
  todos: TodoTypes[]
}

const initialState: initTodo = {
  todos: [],
};

const TodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoTypes>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action:PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoReducer.actions;
export default TodoReducer.reducer;
