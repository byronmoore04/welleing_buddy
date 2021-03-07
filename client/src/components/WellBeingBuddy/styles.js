
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
        width: 200,
        height: 200,
        backgroundColor: theme.palette.accent.light,
        borderRadius: 100
    },
    messageContainer: {
        height: "50%",
        width: "80%",
        border: "1px solid",
        borderColor: theme.palette.text.main,
        borderRadius: 25,
        padding: 15
    },
    message: {
        color: theme.palette.text.main
    }
})
export default styles;