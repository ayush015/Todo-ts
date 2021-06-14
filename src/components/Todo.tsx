import React from "react";
type TodoItem = {
  title: string;
  description: string;
  id?: number;
  onDelete: (id: number) => {};
};

const Todo: React.FC<TodoItem> = ({ title, description, id, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleClick}>delete</button>
      <button>update</button>
    </div>
  );
};

export default Todo;
