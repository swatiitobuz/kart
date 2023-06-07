import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }

    },
    cartTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#395B64',
        margin: '2rem 0'
    },
    cart: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    cartContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
    },
    card: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        margin: '1rem',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '1rem',
        boxShadow: '0 0 1rem 0 rgba(0,0,0,0.1)',
        position: "relative",
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',

        }

    },
    media: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    cardContent: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: "2.5rem",
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            fontSize: "2rem",
            alignItems: "flex-start"
        }
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    margin: {
        backgroundColor: '#e0e0e0',
        padding: '0.5rem',
        margin: '1.5rem',
        cursor: "pointer",
        "&:hover": {
            boxShadow: '0 0 .3rem 0 rgba(0,0,0,0.2)',
        },
    },
    checkbox: {
        marginRight: "2rem",
        color: "#395B64"


    },
    cardTotal: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        margin: '1rem',
        padding: '1rem',
        "&>Button": {
            margin: '2rem auto',
            padding: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            width: '50%',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            }
        },
        [theme.breakpoints.down('md')]: {
            width: '90%',
        }

    },
    content: {
        display: 'flex',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: "auto",
        fontSize: "1.5rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "1rem",
        }
    },
    cardActions: {
        [theme.breakpoints.down('md')]: {
            position: "absolute",
            top: "0",
            right: "0"
        }
    },
    emptyCart:{
        display: 'flex',
        width: '100%',
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        "&>h1":{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#395B64"
        },
        "&>Button":{
            margin: '2rem auto',
            padding: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            width: '10%',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            },
            [theme.breakpoints.down('md')]: {
                width:"60%"
            },
        }

    }

}))