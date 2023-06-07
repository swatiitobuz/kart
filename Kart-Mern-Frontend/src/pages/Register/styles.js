import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container:{
        width:"100%",
        height: "100vh",
        background:"#f5f5f5",
        display:"flex",
        color:"white",
        padding:"1rem 0",
        fontSize:"2rem",
        alignItems:"center",
        flexDirection: "column",
        justifyContent:"center",
        "& a":{
            color:"black",
        },
        [theme.breakpoints.down("md")]: {
            fontSize:"1.5rem"
        }
        
    },
    formContainer:{
        width:"50%",
        height:"70%",
        display:"flex",
        justifyContent:"center",
        background: "#395B64",
        alignItems:"center",
        padding:"2rem",
        borderRadius:"1rem",
        flexDirection:"column",
        [theme.breakpoints.down("md")]: {
            width: "80%",
            height: "65%",
            borderRadius: "0"
        }

    },
    form:{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"2rem",
     
    
    },
    inputContainer:{
        width:"80%",
        display:"flex",
        // flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"1rem",
        "& label":{
            width:"0%",
            fontSize:"1.5rem",
            fontWeight:"bold",
            marginBottom:".5rem"
        },
        "& input":{
            width:"70%",
            height:"2rem",
            borderRadius:".5rem",
            border:"none",
            outline:"none",
            padding:"1rem .5rem",
            fontSize:"1.5rem"
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            "& label": {
                width: "90%",
                textAlign: "left"
            },
            "& input":{
                width: "90%"
            }
        }

    
    },
    button:{
        width:"20%",
        borderRadius:".5rem",
        // padding:"5rem",
        fontSize:"1.8rem !important",
        background:"#395B64",
        color:"white",
        "&:hover":{
            backgroundColor: '#2f4a51',
        },
        [theme.breakpoints.down("md")]: {
            width: "60%",
            fontSize: "1.5rem !important",
        }
    },
}))