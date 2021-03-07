import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core"

import MoodDialog from "./MoodDialog/moodDialog"
import HealthDialog from "./HealthDialog/healthDialog"
import ProfileDialog from "./ProfileDialog/profileDialog"
import { AuthContext } from "components/AuthProvider/authProvider";
import styles from "./styles"

const Nav = (props) => {
    const { classes } = props;
    const user = useContext(AuthContext);
    const [loaded, setLoaded] = useState(false);
    const [openProfileDialog, setOpenProfileDialog] = useState(false);
    const [openMoodDialog, setOpenMoodDialog] = useState(false);
    const [openHealthDialog, setOpenHealthDialog] = useState(false);


    // Opens and closes dialog for adding mood
    const openMoodDialogPopup = () => {
        setOpenMoodDialog(true);
      }
    
    const closeMoodDialogPopup = () => {
        setOpenMoodDialog(false);
    }

    // Opens and closes dialog for adding mood
    const openProfilePopup = () => {
        setOpenProfileDialog(true);
        }
    
    const closeProfileDialogPopup = () => {
        setOpenProfileDialog(false);
    }

    
    // Opens and closes dialog for adding mood
    const openHealthDialogPopup = () => {
        setOpenHealthDialog(true);
      }
    
    const closeHealthDialogPopup = () => {
        setOpenHealthDialog(false);
    }

    return (
        <div className={classes.root}>
            <MoodDialog
                open={openMoodDialog}
                onClose={() => closeMoodDialogPopup()}
            />
            <HealthDialog 
                open={openHealthDialog}
                onClose={() => closeHealthDialogPopup()}
            />
            <ProfileDialog 
                open={openProfileDialog}
                onClose={() => closeProfileDialogPopup()}
            />
            <div className={classes.header}>
                <Typography className={classes.title}>Welcome,</Typography>
                <Typography className={classes.titleName}>{user.userState.displayName}</Typography>
                
            </div>
            <div className={classes.btnDiv}>
                <Button className={classes.signOutBtn} onClick={() => openMoodDialogPopup()}>
                    <Typography className={classes.signOutText}>
                        Submit Mood
                    </Typography>
                </Button>
                <Button className={classes.signOutBtn} onClick={() => openHealthDialogPopup()}>
                    <Typography className={classes.signOutText}>
                        Wellbeing Form
                    </Typography>
                </Button>
                <Button className={classes.signOutBtn} onClick={() => openProfilePopup()}>
                    <Typography className={classes.signOutText}>
                        Profile
                    </Typography>
                </Button>
            </div>

        </div>
    )
}

export default withStyles(styles)(Nav);
