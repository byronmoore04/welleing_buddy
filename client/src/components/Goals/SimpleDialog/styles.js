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
    color: theme.palette.text.main
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
  linkBtn: {
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
    },
    slider: {
        width: 500,
        height: 110,
        margin: "10px 0px",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: "1px solid",
        borderColor: theme.palette.text.main,
        borderRadius: 15,
        // Slider Element	
        '& .MuiSlider-root': {
            width: 300,
            marginTop: 46,
            marginRight: 40
        },
        '& .MuiSlider-markLabel': {
            color: theme.palette.text.main
        },
        '& .MuiSlider-markLabelActive': {
            color: theme.palette.text.main
        },
        '& 	.MuiSlider-track': {
            color: theme.palette.text.main,
            height: 5
        },
        '& 	.MuiSlider-rail': {
            color: theme.palette.text.alt,
            height: 5
        },
        '& .MuiSlider-mark': {
            height: 5
        },
        '& .MuiSlider-markActive': {
            height: 5,
        },
        '& .MuiSlider-thumb': {
            color: theme.palette.accent.light
        }
    },
});

export default styles;
