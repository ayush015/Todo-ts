import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, TextArea, TodoList } from "ayush-todo-react-component";
import { ITodo } from "./interface";

const App = () => {
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const [todoId, setTodoId] = useState<string | null>(null);
  const [updating, setUpdating] = useState<boolean | null>(false);
  // setting title and description
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const getAll = () => {
    fetch(/api/1v)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAll();
  }, []);
  //creat Todo
  const createTodo = async () => {
    console.log(title, description);
    try {
      fetch("/api/v1", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const { title, description } = data;
          setTodos([...todos, { title, description }]);
          setTitle("");
          setDescription("");
          getAll();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const update = () => {
    fetch(`/api/v1/${todoId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { title, description } = data;
        setTodos([...todos, { title, description }]);
        setTitle("");
        setDescription("");
        getAll();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    updating ? update() : createTodo();
  };
  const handleDelete = (_id: any) => {
    fetch(`/api/v1/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        getAll();
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = (_id: any) => {
    const todo = todos.find((m: ITodo) => m._id === _id);
    if (!todo) return;
    setUpdating(true);
    setTodoId(_id);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  return (
    <div>
      <h1>Enter Your Todo</h1>
      <div>
        <TextArea
          style={{ margin: "20px 10px 20px 70px" }}
          name="title"
          label="Title"
          value={title}
          placeholder="Enter title..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <TextArea
          style={{ margin: "0 10px 10px " }}
          name="description"
          label="description"
          value={description}
          placeholder="describe your task..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        {updating ? (
          <Button label="update" primary={true} onClick={handleClick} />
        ) : (
          <Button label="Add" success={true} onClick={handleClick} />
        )}
      </div>
      {todos.map(({ _id, title, description }) => {
        return (
          <>
            <TodoList title={title} description={description} key={_id} />
            <Button
              label="Update"
              primary={true}
              onClick={() => {
                handleUpdate(_id);
                console.log(_id);
              }}
            />
            <Button
              label="Delete"
              danger={true}
              onClick={() => handleDelete(_id)}
            />
          </>
        );
      })}
    </div>
  );
};

export default App;
