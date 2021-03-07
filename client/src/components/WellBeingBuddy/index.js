import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper } from "@material-ui/core"

import { AuthContext } from "components/AuthProvider/authProvider"
import * as Express from "api/express"
import styles from "./styles"

const WellBeingBuddy = (props) => {
    const { classes } = props;
    const [exp, setExp] = useState("false")
    const user = useContext(AuthContext);

    useEffect(() => {
        console.log("in useEffect")
        apiCall()
    }, [])

    const apiCall = async () => {
        let res = await Express.callExpressAPI()
        setExp(res.message);
       // console.log(variable)
    }
   
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Meet Well-being Buddy!</Typography>
            <div className={classes.circle} />
            <div className={classes.messageContainer}>
                <Typography className={classes.message}>Chad: {exp}</Typography>
            </div>
        </div>
    )
}

export default withStyles(styles)(WellBeingBuddy);
