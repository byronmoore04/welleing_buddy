import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio, FormControlLabel, RadioGroup, Dialog, DialogTitle, DialogContent, Button, Typography} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

import { AuthContext } from "components/AuthProvider/authProvider"
import * as HealthForm from "api/healthForm"
import styles from "./styles";


function HealthDialog(props) {
  const { onClose,  open } = props;
  
  const user = useContext(AuthContext);
  const [page, setPage] = React.useState(1);


  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  const [q4, setQ4] = useState("");  
  const [q5, setQ5] = useState("");  
  const [q6, setQ6] = useState("");  

  const [q7, setQ7] = useState("");  
  const [q8, setQ8] = useState("");  
  const [q9, setQ9] = useState("");  

  const [q10, setQ10] = useState("");  
  const [q11, setQ11] = useState("");  
  const [q12, setQ12] = useState("");  

  const [q13, setQ13] = useState("");  
  const [q14, setQ14] = useState("");  
  const [q15, setQ15] = useState("");  



  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  const handleClose = () => {
    onClose();
  };

  const resetState = () => {
    setQ1("")
    setQ2("")
    setQ3("")
    setQ4("")
    setQ5("")
    setQ6("")
    setQ7("")
    setQ8("")
    setQ9("")
    setQ10("")
    setQ11("")
    setQ12("")
    setQ13("")
    setQ14("")
    setQ15("")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    HealthForm.addHealthForm(user.userState.uid, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15);
    resetState();
    onClose();
  };

  const { classes } = props;
  return (
    <Dialog className={classes.root} fullWidth={true} maxWidth="md" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>
        <Typography variant="h2" className={classes.title}>Please complete this wellbeing assessment</Typography>
      </DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            {page === 1 &&
            <div className={classes.formContainer}>
              <Typography className={classes.subTitle}>Physical Care</Typography>
              <Typography className={classes.subTitleAlt}>1 = I do this poorly, 2 = I doo this okay, 3 = I do this well</Typography>
              <RadioGroup value={q1} onChange={(event) => setQ1(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Eat healthy foods</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q2} onChange={(event) => setQ2(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Exercise</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q3} onChange={(event) => setQ3(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Eat regularly</Typography>
                </div>
              </RadioGroup>
            </div>
            }
            
            {page === 2 &&
            <div className={classes.formContainer}>
              <Typography className={classes.subTitle}>Psychological Care</Typography>
              <Typography className={classes.subTitleAlt}>1 = I do this poorly, 2 = I doo this okay, 3 = I do this well</Typography>
              <RadioGroup value={q4} onChange={(event) => setQ4(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Take time off from work, school, and other obligations</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q5} onChange={(event) => setQ5(event.target.value)}>
                <div className={classes.radioItems} >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Express my feelings in a healthy way</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q6} onChange={(event) => setQ6(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Recognize my own strengths and achievements</Typography>
                </div>
              </RadioGroup>
            </div>
            }

            {page === 3 &&
            <div className={classes.formContainer}>
              <Typography className={classes.subTitle}>Social Self Care</Typography>
              <Typography className={classes.subTitleAlt}>1 = I do this poorly, 2 = I doo this okay, 3 = I do this well</Typography>
              <RadioGroup value={q7} onChange={(event) => setQ7(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Spend time with friends and family</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q8} onChange={(event) => setQ8(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Ask for help when needed</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q9} onChange={(event) => setQ9(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Keep in touch with old friends</Typography>
                </div>
              </RadioGroup>
            </div>
            }

            {page === 4 &&
            <div className={classes.formContainer}>
              <Typography className={classes.subTitle}>Spiritual Self Care</Typography>
              <Typography className={classes.subTitleAlt}>1 = I do this poorly, 2 = I doo this okay, 3 = I do this well</Typography>
              <RadioGroup value={q10} onChange={(event) => setQ10(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Spend time in nature</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q11} onChange={(event) => setQ11(event.target.value)}>
                <div className={classes.radioItems} >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Meditate</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q12} onChange={(event) => setQ12(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Set aside time for thought and reflection</Typography>
                </div>
              </RadioGroup>
            </div>
            }
            {page === 5 &&
            <div className={classes.formContainer}>
              <Typography className={classes.subTitle}>Professional Self Care</Typography>
              <Typography className={classes.subTitleAlt}>1 = I do this poorly, 2 = I doo this okay, 3 = I do this well</Typography>
              <RadioGroup value={q13} onChange={(event) => setQ13(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Say “no” to excessive new responsibilities</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q14} onChange={(event) => setQ14(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Keep a comfortable workspace that allows me to be successful</Typography>
                </div>
              </RadioGroup>
              <RadioGroup value={q15} onChange={(event) => setQ15(event.target.value)}>
                <div className={classes.radioItems} >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <Typography className={classes.inputLabel}>Learn new things related to my profession</Typography>
                </div>
              </RadioGroup>
              <Button type="submit" className={classes.subBtn}>Submit</Button>
            </div>
            }
            <Pagination count={5} page={page} onChange={handlePaginationChange} />
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(HealthDialog);
