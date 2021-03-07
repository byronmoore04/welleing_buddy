import React, { useEffect, useState, useContext } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../components/AuthProvider/authProvider";
import * as Express from "api/express.js"

import Nav from "components/Nav/index.js"
import TodosPane from "components/Todos/index.js"
import GoalsPane from "components/Goals/index.js"
import WellBeingBuddy from "components/WellBeingBuddy/index.js"
import styles from "./styles"


const LoginPage = (props) => {
    const { classes } = props;
    const [test, setTest] = useState('');
    const user = useContext(AuthContext);

    useEffect(() => {
        console.log("in useEffect")
        apiCall()
    }, [])

    const apiCall = async () => {
        let res = await Express.callExpressAPI()
        setTest(res.message);
       // console.log(variable)
    }

    return (
        <main className={classes.root}>
            <div className={classes.nav}>
                <Nav />
            </div>
            <div className={classes.gridContainer}>
                <div className={classes.todos}>
                    <TodosPane />
                </div>
                <div className={classes.goals} >
                    <GoalsPane />
                </div>
                <div className={classes.buddy} >
                    <WellBeingBuddy />
                </div>     
            </div>
        </main>
    )
}

export default withStyles(styles)(LoginPage);
