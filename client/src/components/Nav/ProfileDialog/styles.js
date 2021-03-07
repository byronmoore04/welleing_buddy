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
    marginBottom: 5
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    
    // Text Fields
    '& .MuiTextField-root': {
      width: 500,
      margin: "10px 0px"
        },
    '& label.Mui-focused': {
    color: theme.palette.text.main,
    },
    '& .MuiInputBase-input': {
        color: theme.palette.text.main,
    },
    '& .MuiFormLabel-root': {
        color: theme.palette.text.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.text.main,
            borderRadius: 15,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.text.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.text.main,
        },
    },
  },
  subBtn: {
    border: "1px solid",
    borderColor: theme.palette.text.main,
    color:  theme.palette.text.main,
    borderRadius: 25,
    width: 130,
    padding: "10px 0px",
    marginBottom: 15,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)"
    },
    "button:focus": { 
        outline: 'none' 
        }
    },
    btnCont: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%",
      marginTop: 50
    },
    signOutBtn: {
      border: "1px solid",
      borderColor: theme.palette.text.main,
      borderRadius: 25,
      width: 130,
      padding: "10px 0px",
      marginBottom: 5,
      transition: "all .2s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)"
      }
  },
  signOutText:{
      color: theme.palette.text.main
  },
    inputLabel: {
        color: theme.palette.text.main,
        marginLeft: 10
    }
});

export default styles;
