import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField, Dialog, DialogTitle, DialogContent, Slider} from "@material-ui/core";

import { AuthContext } from "components/AuthProvider/authProvider"
import * as Todos from "api/todos"
import styles from "./styles";

const marks = [
  {
    value: 1,
    label: 'Low',
  },
  {
    value: 2,
    label: 'Medium',
  },
  {
    value: 3,
    label: 'High',
  }
];

function SimpleDialog(props) {
  const { onClose,  open } = props;
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);
  const user = useContext(AuthContext);

  const handleSliderChange = (event, newValue) => {
    setPriority(newValue)
  }

  const handleClose = () => {
    setTitle("");
    setPriority(1);
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Todos.addTodo(user.userState.uid, title, priority);
    onClose();
    setTitle("");
    setPriority("");
  };

  const { classes } = props;
  return (
    <Dialog className={classes.root} fullWidth={true} maxWidth="sm" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>
        <Typography variant="h1" className={classes.title}>Add a Todo</Typography>
      </DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                label="Todo Name"
                variant="outlined"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <div className={classes.slider}>
                <Typography className={classes.inputLabel}>Priority</Typography>
                <Slider
                key={`slider-${priority}`}
                defaultValue={priority}
                onChange={handleSliderChange}
                min={1}
                max={3}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                />
            </div>
            <Button type="submit" className={classes.linkBtn}>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(SimpleDialog);
