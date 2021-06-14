import React, { useState } from "react";
import Todo from "./components/Todo";
import AddNewTodo from "./components/AddNewTodo";
import { ITodo } from "./interface";

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const handleAdd = (newTodo: ITodo) => {
    setTodoList((prev) => {
      return [...prev, newTodo];
    });
  };
  const handleDelete = (id: number) => {
    setTodoList((prev) => {
      return prev.filter((todos, index) => index !== id);
    });
  };
  return (
    <>
      <AddNewTodo onAdd={handleAdd} />
      {todoList.map((todos: ITodo, key: number) => {
        <Todo
          key={key}
          id={key}
          title={todos.title}
          description={todos.description}
          onDelete={handleDelete}
        />;
      })}
    </>
  );
};

export default App;
