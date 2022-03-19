import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCat, getAllCat } from "../../../Redux/features/category";
import Loading from "../../alerts/Loading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateCategory({
  catDialogueOpen,
  setCatDialogueOpen,
}) {
  // States
  const [catName, setCatName] = useState("");

  // Store
  const { pending, error } = useSelector((state) => state.category);

  //   functions
  const dispatch = useDispatch();
  const handleCreateCat = (e) => {
    e.preventDefault();
    dispatch(createCat({ catName }));
    dispatch(getAllCat());
    setCatDialogueOpen(false);
  };
  return (
    <>
      {pending ? (
        <Loading />
      ) : error ? (
        <Alert severity="error">Somethign Went Wrong...</Alert>
      ) : (
        <Dialog
          open={catDialogueOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setCatDialogueOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            <Typography align="center" variant="h4">
              Create Category
            </Typography>
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Category Name"
              variant="standard"
              onChange={(e) => setCatName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setCatDialogueOpen(false)} color="error">
              Close
            </Button>
            <Button onClick={handleCreateCat}>Create</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
