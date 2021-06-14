import React from "react";
type TodoItem = {
  title: string;
  description: string;
  id?: number;
};

const Todo: React.FC<TodoItem> = ({ title, description, id }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>delete</button>
      <button>update</button>
    </div>
  );
};

export default Todo;
