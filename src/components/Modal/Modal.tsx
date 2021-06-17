import * as React from "react";
import "./modal.scss";
import { Dialog, DialogTitle } from "@material-ui/core";

export interface ModalProps {
  modalOpen: boolean;
  modalTitle?: string;
}
export type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
export type InputArgs = ModalProps & Omit<ReactInput, keyof ModalProps>;
export const Modal = ({
  modalOpen,
  modalTitle,
  children,
  ...props
}: InputArgs) => {
  return (
    <Dialog
      className="modalWidth"
      disableEscapeKeyDown={true}
      disableBackdropClick={true}
      open={modalOpen}
      {...props}
    >
      <DialogTitle className="dialogTitle">
        {modalTitle ? modalTitle : "Modal Title"}
      </DialogTitle>

      {children}
    </Dialog>
  );
};
