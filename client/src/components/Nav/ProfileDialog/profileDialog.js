import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Dialog, DialogTitle, DialogContent, Button, Typography} from "@material-ui/core";

import { AuthContext } from "components/AuthProvider/authProvider"
import * as Profile from "api/profile"
import styles from "./styles";


function ProfileDialog(props) {
  const { onClose,  open } = props;
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("")
  const user = useContext(AuthContext);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    fetchProfile();
  }, [])

  const fetchProfile = async () => {
    let profile = await Profile.getProfile(user.userState.uid);
    console.log(profile)
    setAge(profile.age)
    setGender(profile.gender)
    setName(profile.name)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Profile.addProfile(user.userState.uid, age, gender, name);
    onClose();
  };

  const doSignOut = () => {
    window.location = "/login"
    user.signOut()
}

  const { classes } = props;
  return (
    <Dialog className={classes.root} fullWidth={true} maxWidth="sm" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>
        <Typography variant="h2" className={classes.title}>Profile</Typography>
      </DialogTitle>
      <DialogContent>
      <Typography className={classes.subTitle}>User: {user.userState.displayName}</Typography>
      <Typography className={classes.subTitle}>Email: {user.userState.email}</Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                label="Your First Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField 
                label="Age"
                variant="outlined"
                value={age}
                onChange={(event) => setAge(event.target.value)}
            />
            <TextField 
                label="Gender"
                variant="outlined"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
            />
            <Button type="submit" className={classes.subBtn}>Save Profile</Button>
        </form>
        <div className={classes.btnCont}>
            <Button className={classes.signOutBtn} onClick={() => doSignOut()}>
                <Typography className={classes.signOutText}>
                    Sign out
                </Typography>
            </Button>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(ProfileDialog);
