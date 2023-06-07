import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({

    root: {
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        '& h1': {
            fontSize: '7rem',
            fontWeight: '600',
            color: '#555',
            margin: "4rem 0",
            textDecoration: "underline"
        }
    },
    location: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        flexDirection: "column"
    },
    mapContainer: {
        width: '50%',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        [theme.breakpoints.down('md')]: {
            width: "100%",
            height: "30vh"
        }
    },
    map: {
        width: '100%',
        height: '100%',
        borderRadius: '1rem',
        border: "none"
    },
    textContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        flexDirection: "column",
        '& h2':{
            fontSize: '3rem',
            fontWeight: '600',
            color: '#555',
            margin: ".7rem 0"
        },
        '& p':{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#555',
            margin: ".7rem 0",
            textAlign:"center",
            width:"70%",
            lineHeight:"1.5"
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            height: "30vh"
        }
    },
}))