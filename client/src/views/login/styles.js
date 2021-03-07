import GoogleIcon from "../../assets/googleIcon.png"

const styles = (theme) => ({ 
    main: {
        height: "100vh",
        width: "100vw",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 25,
        height: "auto",
        width: "auto",
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    title: {
        fontSize: 46,
        lineHeight: 1,
        fontWeight: 600,
        color: theme.palette.text.main,
        marginLeft: 20,
        marginTop: 20
    },
    signInBtn: {
        border: "1px solid",
        borderColor: theme.palette.text.main,
        borderRadius: 10,
        height: 60,
        width: 250,
        padding: "10px 0px",
        margin: 50
    },
    signInText:{
        color: theme.palette.text.main
    },
    googleIcon: {
        width: 25,
        height: 25,
        marginRight: 5,
        backgroundColor: "white",
        backgroundImage: 'url(' + GoogleIcon + ')',
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    }
})
export default styles;