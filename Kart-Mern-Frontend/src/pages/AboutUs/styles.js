import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    root:{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        '& h1':{
            fontSize: '7rem',
            fontWeight: '600',
            color: '#555',
            margin:"4rem 0",
            textDecoration:"underline"
        }
    },
    about:{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer:{
        width: '100%',
        height:"60vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:"1.8rem",
        '& img':{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '2rem',
            boxShadow: '0px 5px 10px #ccc',
            }

    },
    textContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        '& p':{
            fontSize: '2rem',
            lineHeight:"2",
            margin:"1.6rem 0"
        }
    }
}))