import React from 'react';
import './Create.css';

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Create = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <>
      <div className="header">Create To Do List</div>
      <form
        className="form"
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <input
          type="text"
          className="inputField"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="submit" className="createButton">
          Create
        </button>
      </form>
    </>
  );
};

export default Create;
