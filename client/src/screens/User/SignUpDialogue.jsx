import React from "react";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SignUpForm from "./SignUpForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUpDialogue({
  openRegister,
  setOpenRegister,
  setOpenLogin,
  setLogStatus,
  setOpen,
}) {
  const handleClose = () => {
    setOpenRegister(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={openRegister}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              SignUp
            </Typography>
          </Toolbar>
        </AppBar>
        <SignUpForm
          setOpenRegister={setOpenRegister}
          setOpenLogin={setOpenLogin}
          setLogStatus={setLogStatus}
          setOpen={setOpen}
        />
      </Dialog>
    </>
  );
}
