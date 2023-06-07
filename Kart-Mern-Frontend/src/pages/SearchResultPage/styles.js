import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        
    },
    left: {
        width: "20%",
        height: "100%",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "1rem",
        [theme.breakpoints.down('md')]:{
            display: "none"
        }
    },
    right: {
        width: "100%",
        height: "100%", 
        padding: "1rem",
        borderRadius: "1rem",
      
    },
    cards: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        [theme.breakpoints.down('md')]:{
        gridTemplateColumns: "repeat(2, 1fr)",

        }
    },
    notFound:{
        textAlign: "center",
        fontSize: "4rem",
        color: "red",
        marginTop: "2rem",
        position:"absolute",
        top:"50%",
        left:"50%",
    },
    loading:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        fontSize:"4rem",
        fontWeight:"bold",
    }


}));