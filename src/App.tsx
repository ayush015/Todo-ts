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

  return (
    <>
      <AddNewTodo
        onAdd={handleAdd} //not working how to pass fuctions as prop ?
      />
      {todoList.map((todos: ITodo, key: number) => {
        <Todo
          key={key} // for removing warning
          id={key} // for deletion and updation the object Id will be passed here
          title={todos.title}
          description={todos.description}
        />;
      })}
    </>
  );
};

export default App;
