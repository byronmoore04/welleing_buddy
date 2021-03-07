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
    color: theme.palette.text.alt
  },
  subTitleAlt: {
    fontSize: 14,
    fontWeight: 300,
    color: theme.palette.text.alt,
    marginBottom: 14
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    '& .MuiFormGroup-root': {
      alignItems: 'left'
    },
    // For radio items
    '& .MuiFormControlLabel-root': {
        color: theme.palette.text.main
    },
    '& .Mui-checked': {
        color: theme.palette.text.main
    },
    // For pagination
    '& .MuiPagination-root': {
      '& .MuiPagination-ul': {
        '& .Mui-selected':
        {
          background: theme.palette.secondary.main
        },
        '& .MuiPaginationItem-root': {
          color: "white"
        },
      }
    }
  },
  subBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.main,
    marginLeft: 300,
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
    formContainer: {
      marginBottom: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'

    },
    inputLabel: {
        color: theme.palette.text.main,
        marginLeft: 10,
        marginTop: 12,
        lineHeight: 1,
        fontSize: 18
    },
    radioItems: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 30
    }
});

export default styles;
