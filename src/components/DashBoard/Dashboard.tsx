import React, { useState, useEffect, ChangeEvent } from "react";
//@material-ui imports
import {
  TextField,
  Grid,
  DialogContent,
  IconButton,
  Button,
  DialogActions,
} from "@material-ui/core";
import { Clear, Edit, Delete } from "@material-ui/icons";

//local imports
import { Header } from "../Header/Header";
import { HeaderRight } from "../HeaderRight/HeaderRight";
import { Modal } from "../Modal/Modal";
import { TodoList } from "../TodoList/TodoList";
//services import
import { deleteAPI, fetchAPI, postAPI } from "../../services/api";
import { ITodo } from "../../interface";

export const DashBoard = () => {
  const [open, setOpen] = useState<boolean>(false); //for modal
  const [taskList, setTaskList] = useState<ITodo[] | []>([]); // array of todos
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  //function sent as props to <headerRight /> component to open the modal
  const handleSetOpen = (bool: boolean) => {
    setOpen(bool);
  };

  //GET request for all todos
  useEffect(() => {
    fetchAPI("/").then((res: any) => {
      setTaskList(res.data);
      console.log(taskList);
    });
  }, [taskList]);

  //POST request for adding task to <TodoList />
  const addTask = () => {
    const todo = JSON.stringify({ title, description });
    postAPI("/", todo).then((res: any) => {
      const newTodo = res;
      setTaskList([...taskList, newTodo]);
      setOpen(false);
      setTitle("");
      setDescription("");
    });
  };

  //DELETE request for deleting any particular todo
  const handleDelete = (_id: string) => {
    deleteAPI(`/${_id}`);
    setTaskList((prev) => prev.filter((m: ITodo) => m._id !== _id));
  };
  return (
    <>
      <Header name="Ayush Srivastava" imageSrc="https://picsum.photos/200/300">
        <HeaderRight handleSetOpen={handleSetOpen} />
      </Header>
      <Modal modalOpen={open}>
        <DialogContent className="dialogContent">
          <IconButton
            className="CancelCrossIcon"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            <Clear />
          </IconButton>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                helperText=""
                placeholder="Add text"
                name="title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                helperText=""
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid className="actionButton" item xs={12} sm={12} md={12}>
            <Button
              className="buttonCancel"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button className="buttonDefault" type="submit" onClick={addTask}>
              Add
            </Button>
          </Grid>
        </DialogActions>
      </Modal>

      {taskList.map(({ title, description, _id }) => {
        return (
          <>
            <TodoList title={title} description={description} key={_id}>
              <div
                style={{ position: "relative", bottom: "150px", left: "21%" }}
              >
                <IconButton className="edit" aria-label="Close">
                  <Edit />
                </IconButton>
                <IconButton
                  className="delete"
                  aria-label="Close"
                  onClick={() => {
                    handleDelete(`${_id}`);
                  }}
                >
                  <Delete />
                </IconButton>
              </div>
            </TodoList>
          </>
        );
      })}
    </>
  );
};
