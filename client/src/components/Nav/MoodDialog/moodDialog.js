import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio, FormControlLabel, RadioGroup, Dialog, DialogTitle, DialogContent, Button, Typography} from "@material-ui/core";

import { AuthContext } from "components/AuthProvider/authProvider"
import * as Mood from "api/mood"
import styles from "./styles";


function MoodDialog(props) {
  const { onClose,  open } = props;
  const [mood, setMood] = useState("");
  const user = useContext(AuthContext);

  const handleClose = () => {
    setMood("");
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Mood.addMood(user.userState.uid, mood);
    onClose();
    setMood("");
  };

  const handleChange = (event) => {
    setMood(event.target.value);
  };

  const { classes } = props;
  return (
    <Dialog className={classes.root} fullWidth={true} maxWidth="sm" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>
        <Typography variant="h2" className={classes.title}>Select your mood</Typography>
      </DialogTitle>
      <DialogContent>
      <Typography variant="h4" className={classes.subTitle}>Only one mood will be saved per day!</Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <RadioGroup aria-label="gender" name="gender1" value={mood} onChange={handleChange}>
              <div className={classes.radioItems}>
                <FormControlLabel value="happy" control={<Radio />} label="Happy" />
                <FormControlLabel value="relaxed" control={<Radio />} label="Relaxed" />
                <FormControlLabel value="nervous" control={<Radio />} label="Nervous" />
                <FormControlLabel value="confused" control={<Radio />} label="Confused" />
              </div>
              <div className={classes.radioItems}>
                <FormControlLabel value="sleepy" control={<Radio />} label="Sleepy" />
                <FormControlLabel value="annoyed" control={<Radio />} label="Annoyed" />
                <FormControlLabel value="sad" control={<Radio />} label="Sad" />
                <FormControlLabel value="angry" control={<Radio />} label="Angry" />
              </div>
              
            </RadioGroup>
            <Button type="submit" className={classes.subBtn}>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(MoodDialog);
