import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"

        }
    },
    formContainer: {
        width: '80%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        '& h1': {
            fontSize: '3rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: 'rgba(0,0,0,0.6)',
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            padding: '2rem 0',

        }
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        "&>input": {
            border: '2px solid #ccc',
            width: '100%',
            outline: 'none',
            padding: '2rem',
            fontSize: '1.8rem',
            marginBottom: '2rem',
            borderRadius: '2rem',
        },
        [theme.breakpoints.down('md')]: {
            width: "70%",
            alignItems: "center"
        }
    },
    inputLabel: {
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: 'rgba(0,0,0,0.6)',
    },
    button: {
        fontSize: "1.8rem !important",
        padding: "1rem 2rem !important",
        width: "35%",
        backgroundColor: '#395B64 !important',
        "&:hover": {
            backgroundColor: '#2f4a51 !important',
        }
    },
    form: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    }

}))