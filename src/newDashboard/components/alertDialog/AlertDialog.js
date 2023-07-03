import React, { forwardRef, useImperativeHandle, useReducer, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = (
  {
    onConfirm = () => {},
    onCancel = () => {},
    title: defaultTitle = "Tiêu đề",
    message: defaultMessage = "Nội dung",
  },
  ref
) => {
  const [state, dispatchState] = useReducer(
    (prevState, newState) => {
      if (typeof newState === "object") return { ...prevState, ...newState };
      if (typeof newState === "function") return newState(prevState);
      return false;
    },
    { isOpen: false, title: defaultTitle, message: defaultMessage, isLoading: false }
  );

  const { isOpen, title, message } = state || {};

  useImperativeHandle(ref, () => ({ show: _show, hide: _hide }), []);

  const _show = (title = "", message = "") => dispatchState({ isOpen: true, title, message });
  const _hide = () => dispatchState({ isOpen: false });

  const handleConfirm = () => {
    _hide();
    onConfirm();
  };
  const handleCancel = () => {
    _hide();
    onCancel();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Hủy </Button>
        <Button onClick={handleConfirm} autoFocus>
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default forwardRef(AlertDialog);
