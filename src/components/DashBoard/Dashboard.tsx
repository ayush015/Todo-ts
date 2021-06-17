import * as React from "react";
import { Header } from "../Header/Header";
import { HeaderRight } from "../HeaderRight/HeaderRight";
import { Modal } from "../Modal/Modal";
import { TodoList } from "../TodoList/TodoList";
import {
  TextField,
  Grid,
  DialogContent,
  IconButton,
  Button,
  DialogActions,
} from "@material-ui/core";
import { Clear, Edit, Delete } from "@material-ui/icons";
export const DashBoard = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleSetOpen = (bool: boolean) => {
    setOpen(bool);
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
              <TextField helperText="" placeholder="Add text" name="title" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField helperText="" placeholder="Description" name="title" />
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
            <Button className="buttonDefault" type="submit">
              Add
            </Button>
          </Grid>
        </DialogActions>
      </Modal>

      <TodoList
        title="Hello world"
        description="Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem IpusmLorem IpusmLorem IpusmLorem Ipusm"
      >
        <div style={{ position: "relative", bottom: "150px", left: "21%" }}>
          <IconButton className="edit" aria-label="Close">
            <Edit />
          </IconButton>
          <IconButton className="delete" aria-label="Close">
            <Delete />
          </IconButton>
        </div>
      </TodoList>
    </>
  );
};
