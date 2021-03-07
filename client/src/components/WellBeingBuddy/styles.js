import robot from "assets/robot.png"

const styles = (theme) => ({ 
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        width: "100%",
        borderRadius: 50,
        // mobile
        [theme.breakpoints.down("sm")]: {
            height: 500
        }
    },
    title: {
        fontSize: 34,
        color: theme.palette.text.main,
        textAlign: 'center'
    },
    circle: {
        width: 300,
        height: 300,
        backgroundColor: theme.palette.accent.light,
        backgroundImage: 'url(' + robot + ')',
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    messageContainer: {
        height: "50%",
        width: "80%",
        border: "1px solid",
        borderColor: theme.palette.text.main,
        borderRadius: 25,
        padding: 15,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    messContInner: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        width: "100%"
    },
    messageItem: {
        width: "100%",
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15,
        padding: 5,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 25
    },
    messageText: {
        color: theme.palette.text.main,
        fontSize: 14
    },
    mesIcon: {
        height: 25,
        width: 25,
        margin: 5,
        backgroundColor: theme.palette.accent.light,
        color: theme.palette.text.main,
        backgroundImage: 'url(' + robot + ')',
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    signOutBtn: {
        border: "1px solid",
        borderColor: theme.palette.text.main,
        borderRadius: 25,
        width: "80%",
        padding: "10px 0px",
        marginBottom: 15,
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)"
        }
    },
    signOutText:{
        color: theme.palette.text.main
    },
})
export default styles;