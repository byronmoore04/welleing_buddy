
const styles = (theme) => ({ 
    root: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        marginRight: 40,
        marginBottom: 20,
        height: "calc(100% - 20px)",
        width: "calc(100% - 40px)",
        borderRadius: 50,
        // mobile
        [theme.breakpoints.down("sm")]: {
            height: 500
        }
    },
    header: {
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 34,
        marginLeft: 40,
        color: theme.palette.text.main,
        textAlign: 'left'
    },
    addIcon: {
        width: 50,
        height: 50,
        marginRight: 20,
        color: theme.palette.text.main,
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)"
        }
    },
    todoContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    listDiv: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    todoItem: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "90%",
        padding: 5,
        marginTop: 10,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 25,
    }, 
    markIcon: {
        height: 35,
        width: 35,
        marginLeft: 20,
        cursor: 'pointer',
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)"
        }
    },
    markIconDeleted: {
        height: 35,
        width: 35,
        marginLeft: 20,
        cursor: 'pointer',
    },
    todoTitle: {
        color: theme.palette.text.main,
        marginLeft: 20,
        fontSize: 18,
        marginTop: 6
    },
    todoPriority: {
        color: theme.palette.text.main,
        marginRight: 20,
        fontSize: 18,
        marginTop: 6
    },
    buttonBase: {
        height: 45,
        width: 45,
        borderRadius: 45,
        marginRight: 20
    },
    editIcon: {
        height: 25,
        width: 25,
        cursor: 'pointer',
        color: theme.palette.text.main
    },    
    deleteIcon: {
        height: 25,
        width: 25,
        cursor: 'pointer',
        color: theme.palette.text.main
    },
})
export default styles;