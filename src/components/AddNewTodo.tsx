import React, { FC, FormEvent, ChangeEvent, useState } from "react";
import { ITodo } from "../interface";

const TodoItem: FC = (props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === "title" ? setTitle(value) : setDescription(value);
  };
  const handleSubmit = (e: FormEvent<HTMLInputElement>): void => {
    props.onAdd({ title, description });
    setTitle("");
    setDescription("");
    e.preventDefault();
  };
  return (
    <>
      <form>
        <label>
          title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <input type="submit" onSubmit={handleSubmit} name="Add" />
      </form>
    </>
  );
};
export default TodoItem;
