import * as React from "react";
import "./totolist.scss";

export interface TodoListProp {
  title?: string;
  description?: string;
}

export const TodoList: React.FC<TodoListProp> = ({
  title,
  description,
  children,
}) => {
  return (
    <div style={{ display: "block" }}>
      <div className="todoList">
        <div style={{ display: "block" }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};
