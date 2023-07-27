import React from 'react';
import { ToDo } from '../../todo';
import { FaRegEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { MdDoneOutline } from 'react-icons/md';
import './TodoListCard.css';
type Props = {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const TodoListCard = ({ todo, todos, setTodos }: Props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [editToDo, setEditToDo] = React.useState<string | number>(todo.notes);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const openEdit = () => {
    console.log('edit fired');
    setIsEdit(!isEdit);
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, notes: editToDo } : todo
      )
    );
    setIsEdit(false);
  };
  console.log(isEdit);
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <form onSubmit={(e) => handleEdit(e, todo.id)} className="notes">
        {todo.completed ? (
          <span className="notes">
            <s>{todo.notes}</s>
          </span>
        ) : isEdit ? (
          <input
            type="text"
            ref={inputRef}
            value={editToDo}
            className="editInput"
            onChange={(e) => setEditToDo(e.target.value)}
          />
        ) : (
          <span className="notes">
            {todo.notes}
            <span onClick={() => handleDone(todo.id)} className="actions">
              <MdDoneOutline />
            </span>

            <span onClick={() => openEdit()} className="actions">
              <FaRegEdit />
            </span>

            <span onClick={() => handleDelete(todo.id)} className="actions">
              <AiFillDelete />
            </span>
          </span>
        )}
      </form>
    </>
  );
};

export default TodoListCard;
