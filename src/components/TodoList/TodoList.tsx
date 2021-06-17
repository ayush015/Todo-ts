import * as React from "react";
import "./totolist.scss";

export interface TodoListProp {
  _id?: string | null;
  title: string | null;
  description: string | null;
}

export const TodoList: React.FC<TodoListProp> = ({
  title,
  description,
  children,
  ...props
}) => {
  return (
    <div style={{ display: "block" }} {...props}>
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
