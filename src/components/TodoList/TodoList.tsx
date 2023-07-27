import React from 'react';
import { ToDo } from '../../todo';
import TodoListCard from '../TodoListCard/TodoListCard';
interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
function ToDoList({ todos, setTodos }: Props) {
  console.log(todos);
  return (
    <div className="container">
      <div className="todos">
        {todos.map((todo) => (
          <TodoListCard todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
