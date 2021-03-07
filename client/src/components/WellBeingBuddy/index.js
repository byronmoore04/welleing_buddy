import React, { useState, useEffect, useContext } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper } from "@material-ui/core"

import { AuthContext } from "components/AuthProvider/authProvider"
import * as Express from "api/express"
import * as Health from "api/healthForm"
import styles from "./styles"

const WellBeingBuddy = (props) => {
    const { classes } = props;
    const [messages, setMessages] = useState(["Hello, I'm Well-being Buddy! :)"])
    const [initLoad, setInitLoad] = useState(false)
    const user = useContext(AuthContext);

    useEffect(() => {
        if (initLoad === false) {
            setInitLoad(true)
            doWork()
        }
    }, [])

    const doWork = () => {
        healthCall().
        then((res) => {
            setTimeout(() => {
                apiCall(res)
            }, 2000)
        })
    }

    const healthCall = async () => {
        let res = await Health.getHealthForm(user.userState.uid)
        let stringVar = res[0].key + "," + res[1].key + "," + res[2].key + "," + res[3].key + "," + res[4].key
        return stringVar
    }

    const apiCall = async (str) => {
        console.log(str)
        let res = await Express.callExpressAPI(str)
        setMessages(messages => [...messages, res])
    }
   
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Meet Well-being Buddy!</Typography>
            <div className={classes.circle} />
            <div className={classes.messageContainer}>
                <div className={classes.messContInner}>
                    {messages.map((message, index) =>   
                        <div className={classes.messageItem} key={message.index}>
                            <div className={classes.mesIcon} />
                            <Typography className={classes.messageText}>{message}</Typography>
                        </div>
                    )}
                </div>
                <Button className={classes.signOutBtn} onClick={() => doWork()}>
                    <Typography className={classes.signOutText}>
                        Assistance
                    </Typography>
                </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(WellBeingBuddy);
