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
import * as Todos from "api/todos";
import styles from "./styles"

const TodosPane = (props) => {
    const { classes } = props;
    const user = useContext(AuthContext);
    const [loaded, setLoaded] = useState(false);
    const [todos, setTodos] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [markedKey, setMarkedKey] = useState();
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        setLoaded(false);
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        let res = await Todos.getTodos(user.userState.uid);
        setTodos(res);
        setLoaded(true);
    }

    const handleDelete = (id) => {
        setTimeout(() => {
            Todos.deleteTodo(user.userState.uid, id);
            fetchTodos();
        }, 200)
    }

    // Mark todo as done
    const handleDone = (id) => {
        setMarkedKey(id);
        setTimeout(() => {   
            Todos.deleteTodo(user.userState.uid, id);
            fetchTodos();
        }, 800);
    }   

    const renderPriority = (priority) => {
        if (priority === 1) {
            return "Low";
        } else if (priority === 2) {
            return "Medium";
        } else if (priority === 3) {
            return "High"
        } else
        {
            return "Low"
        }
    }

    // Opens and closes dialog to add a todo
    const openDialogPopup = () => {
        setOpenDialog(true);
      }
    
    const closeDialogPopup = () => {
        fetchTodos();
        setOpenDialog(false);
    }

    const renderTodos = () => {
        if (loaded) {
            return (
                <div className={classes.listDiv}>           
                    {todos.map((todo) =>   
                        <div className={classes.todoItem} key={todo.key}>
                            { (markedKey !== todo.key) ?
                                <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={
                                    <RadioButtonUncheckedIcon onClick={() => {handleDone(todo.key)}} className={classes.markIcon} />
                                }
                                />
                                :
                                <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={
                                    <CheckCircleOutlineIcon onClick={() => {handleDone(todo.key)}} className={classes.markIconDeleted} />
                                }
                                />
                            }
                            <Typography className={classes.todoTitle}>{todo.title}</Typography>
                            <Typography className={classes.todoPriority}>{renderPriority(todo.priority)}</Typography>
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
                <Typography className={classes.title}>Todos</Typography>
                <AddCircleIcon onClick={() => openDialogPopup()} className={classes.addIcon} />
            </div>
            <div className={classes.todoContainer}>
                {renderTodos()}
            </div>
        </div>
    )
}

export default withStyles(styles)(TodosPane);
