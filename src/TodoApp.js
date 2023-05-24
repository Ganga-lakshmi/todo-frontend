import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (title) => {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => setTodos([...todos, data]));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
