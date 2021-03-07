const styles = (theme) => ({
  root: {  
    '& .MuiDialog-paper': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 25,
        padding: 25
    },
  },
  title: {
    fontSize: 42,
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.text.main
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 400,
    color: theme.palette.text.alt,
    marginBottom: 40
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    '& .MuiFormControlLabel-root': {
        //backgroundColor: 'red',
        color: theme.palette.text.main
    },
    '& .Mui-checked': {
        color: theme.palette.text.main
    }
  },
  subBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.main,
    padding: "15px 32px",
    marginTop: 30,
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
    fontSize: 16,
    borderRadius: 15,
    border: "none",
    "button:focus": { 
        outline: 'none' 
        }
    },
    inputLabel: {
        color: theme.palette.text.main,
        marginLeft: 10
    }
});

export default styles;
