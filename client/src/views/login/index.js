import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper } from "@material-ui/core"

import { AuthContext } from "../../components/AuthProvider/authProvider";
import styles from "./styles"


const LoginPage = (props) => {
    const { classes } = props;
    const user = useContext(AuthContext);

    useEffect(() => {
        console.log(user.userState)
    }, user)

    return (
        <main className={classes.main}>
            <div className={classes.content}>
                <Typography className={classes.title}>Well-Being Buddy! :)</Typography>
                {user.userState === null && 
                    <Button className={classes.signInBtn} onClick={() => user.signIn()}>
                        <Paper className={classes.googleIcon} />
                        <Typography className={classes.signInText}>
                            Sign in with Google
                        </Typography>
                    </Button>
                }
                {user.userState !== null && 
                    <Redirect to='/' />
                }
            </div>
        </main>
    )
}

export default withStyles(styles)(LoginPage);
