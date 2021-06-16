import * as React from "react";
import "./modal.scss";
import {
  TextField,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  DialogTitle,
  Button,
  DialogActions,
} from "@material-ui/core";

import { Clear } from "@material-ui/icons";
export interface ModalProps {
  modalOpen: boolean;
  modalTitle?: string;
  defaultButtonTitle?: string;
  cancleButton?: boolean;
  TextAreaHelperText1?: string;
  TextAreaHelperText2?: string;
  placeholder1?: string;
  placeholder2?: string;
  TextAreaName1?: string;
  TextAreaName2?: string;
  value1?: string;
  value2?: string;
  onClick?: () => void;
}
export type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
export type InputArgs = ModalProps & Omit<ReactInput, keyof ModalProps>;
export const Modal = ({
  modalOpen,
  modalTitle,
  defaultButtonTitle,
  cancleButton,
  TextAreaHelperText1,
  TextAreaHelperText2,
  placeholder1,
  placeholder2,
  TextAreaName1,
  TextAreaName2,
  value1,
  value2,
  ...props
}: ModalProps) => {
  const [close, setClose] = React.useState<boolean>(true);
  const handleCancel = () => {
    setClose(false);
  };
  return (
    <Dialog
      className="modalWidth"
      disableEscapeKeyDown={true}
      disableBackdropClick={true}
      open={modalOpen}
    >
      <DialogTitle className="dialogTitle">
        {modalTitle ? modalTitle : "Modal Title"}
      </DialogTitle>

      <DialogContent className="dialogContent">
        <IconButton className="CancelCrossIcon" aria-label="Close">
          <Clear />
        </IconButton>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              helperText={TextAreaHelperText1}
              placeholder={placeholder1 ? placeholder1 : "Add Task"}
              name={TextAreaName1}
              value={value1}
              {...props}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              helperText={TextAreaHelperText1}
              placeholder={placeholder2 ? placeholder2 : "Description"}
              name={TextAreaName2}
              value={value2}
              {...props}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid className="actionButton" item xs={12} sm={12} md={12}>
          {cancleButton && (
            <Button
              className="buttonCancel"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
          <Button className="buttonDefault" type="submit">
            {defaultButtonTitle ? defaultButtonTitle : "Add"}
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};
