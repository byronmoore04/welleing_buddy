import GoogleIcon from "assets/googleIcon.png";

const styles = (theme) => ({ 
    root: {
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: theme.palette.text.main,
        fontSize: 32,
        lineHeight: 1,
        marginTop: 20
    },
    titleName: {
        color: theme.palette.text.main,
        fontSize: 32,
        lineHeight: 1,
        marginTop: 10
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
    btnDiv: {
        display: 'flex',
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
export default styles;