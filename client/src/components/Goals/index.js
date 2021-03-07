import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography, Accordion, AccordionSummary, FormControlLabel, AccordionDetails, ButtonBase } from "@material-ui/core"

import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import SimpleDialog from "./SimpleDialog/simpleDialog"
import { AuthContext } from "components/AuthProvider/authProvider"
import * as Goals from "api/goals";
import styles from "./styles"

const GoalsPane = (props) => {
    const { classes } = props;
    const user = useContext(AuthContext);
    const [loaded, setLoaded] = useState(false);
    const [goals, setGoals] = useState([]);
    const [markedKey, setMarkedKey] = useState();
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        setLoaded(false);
        fetchGoals();
    }, [])

    const fetchGoals = async () => {
        let res = await Goals.getGoals(user.userState.uid);
        setGoals(res);
        setLoaded(true);
        console.log(res)
    }

    const handleDelete = (id) => {
        setTimeout(() => {
            Goals.deleteGoal(user.userState.uid, id);
            fetchGoals();
        }, 200)
    }

    // Mark todo as done
    const handleDone = (id) => {
        setMarkedKey(id);
        setTimeout(() => {   
            Goals.deleteGoal(user.userState.uid, id);
            fetchGoals();
        }, 800);
    }   

    // Opens and closes dialog to add a todo
    const openDialogPopup = () => {
        setOpenDialog(true);
      }
    
    const closeDialogPopup = () => {
        fetchGoals();
        setOpenDialog(false);
    }

    const renderGoals = () => {
        if (loaded) {
            return (
                <div className={classes.listDiv}>           
                    {goals.map((goal) =>   
                        <div className={classes.todoItem} key={goal.key}>
                            { (markedKey !== goal.key) ?
                                <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={
                                    <RadioButtonUncheckedIcon onClick={() => {handleDone(goal.key)}} className={classes.markIcon} />
                                }
                                />
                                :
                                <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={
                                    <CheckCircleOutlineIcon onClick={() => {handleDone(goal.key)}} className={classes.markIconDeleted} />
                                }
                                />
                            }
                            <Typography className={classes.todoTitle}>{goal.title}</Typography> 
                        </div>
                    )}
              </div>
            )
        } else {
            return null;
        }
    }

    return (
        <div className={classes.root}>
            <SimpleDialog
                open={openDialog}
                onClose={() => closeDialogPopup()}
            />
            <div className={classes.header}>
                <Typography className={classes.title}>Goals</Typography>
                <AddCircleIcon onClick={() => openDialogPopup()} className={classes.addIcon} />
            </div>
            <div className={classes.todoContainer}>
                {renderGoals()}
            </div>
        </div>
    )
}

export default withStyles(styles)(GoalsPane);
