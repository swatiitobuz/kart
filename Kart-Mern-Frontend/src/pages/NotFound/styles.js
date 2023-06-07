import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        '& h1':{
            fontSize: '7rem',
            fontWeight: '600',
            color: '#555',
            margin:"4rem 0",
            textDecoration:"underline"
        },
        '& p':{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#555',
            margin:"1rem 0",
        },
        '& a':{
            fontSize: '2rem',
            fontWeight: '600',
      
        },
        [theme.breakpoints.down('sm')]:{
            '& h1':{
                fontSize: '4rem',
            },
            height:"50vh"
        }
    },
   
}))