import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField, Dialog, DialogTitle, DialogContent, Slider} from "@material-ui/core";

import { AuthContext } from "components/AuthProvider/authProvider"
import * as Goals from "api/goals"
import styles from "./styles";


function SimpleDialog(props) {
  const { onClose,  open } = props;
  const [goal, setGoal] = useState("");
  const user = useContext(AuthContext);

  const handleClose = () => {
    setGoal("");
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Goals.addGoal(user.userState.uid, goal);
    onClose();
    setGoal("");
  };

  const { classes } = props;
  return (
    <Dialog className={classes.root} fullWidth={true} maxWidth="sm" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>
        <Typography variant="h1" className={classes.title}>Add a Goal</Typography>
      </DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                label="Goal Name"
                variant="outlined"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
            />
            <Button type="submit" className={classes.linkBtn}>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(SimpleDialog);
