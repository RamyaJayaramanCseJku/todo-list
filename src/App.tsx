import React, { useState } from 'react';
import Create from './components/Create/Create';
import ToDoList from './components/TodoList/TodoList';
import { ToDo } from './todo';
function App() {
  let todosHistory: ToDo[] = JSON.parse(localStorage.getItem('notes')!);
  const [todo, setTodo] = React.useState<string | number>('');
  const [todos, setTodos] = React.useState<ToDo[]>(todosHistory);
  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(todos));
  }, [todo]);
  React.useEffect(() => {
    let todosHistory: ToDo[] = JSON.parse(localStorage.getItem('notes')!);
    setTodos(todosHistory);
  }, []);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          notes: todo,
          completed: false,
          creationDate: Date.now(),
          completionDate: null,
        },
      ]);
    }
    setTodo('');

    console.log(localStorage.getItem('notes'));
  };
  console.log(todo, todos);
  return (
    <>
      <Create todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <div className="header">List of To Do's</div>
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
