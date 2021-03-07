
const styles = (theme) => ({ 
    root: {
        height: "calc(100vh - 8vh)",
        width: "calc(100vw - 8vh)",
        display: 'flex',
        flexDirection: 'rows',
        padding: "4vh"
    },
    nav: {
        height: "100%",
        width: 200,
        backgroundColor: theme.palette.primary.main,
        marginRight: 40,
        borderRadius: 25
    },
    gridContainer: {
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridTemplateRows: "50% 50%",
        gridTemplateAreas: 
                        `
                        'todos buddy'
                        'goals buddy'
                        `
    },
    todos: {
        height: "100%",
        width: "100%",
        gridArea: "todos"
    },
    goals: {
        height: "100%",
        width: "100%",
        gridArea: "goals"
    },
    buddy: {
        height: "100%",
        width: "100%",
        gridArea: "buddy"
    }
})
export default styles;