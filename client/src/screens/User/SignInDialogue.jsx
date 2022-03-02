import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import SignInForm from "./SignInForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignInDialogue({
  openLogin,
  setOpenLogin,
  setOpenRegister,
  setLogStatus,
  setOpen,
}) {
  const handleClose = () => {
    setOpenLogin(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={openLogin}
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
              SignIn
            </Typography>
          </Toolbar>
        </AppBar>
        <SignInForm
          setOpenLogin={setOpenLogin}
          setOpenRegister={setOpenRegister}
          setLogStatus={setLogStatus}
          setOpen={setOpen}
        />
      </Dialog>
    </>
  );
}
