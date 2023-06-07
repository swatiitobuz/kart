import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    details: {
        width: "100%",
        height: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: "center",
        textAlign: "left",
        padding: "1rem 0",
        background: "#A5C9CA",
        lineHeight: "2"
    },
    priceContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "2rem",
    },
    title: {
        fontSize: "2rem",
        padding: " 0 2rem",
        fontWeight: "bold",
        color: "#395B64"
    },
    price: {
        fontSize: "2.5rem",
        padding: " 0 2rem",
        fontWeight: "bold",
        color: "#395B64"
    },
    more:{
        position: "absolute",
        top: "0",
        right: "0",
        color: "#395B64",
        padding: ".5rem 1rem",
    },
    dropdown:{
        position: "absolute",
        top: "2rem",
        right: "0",
        background: "#A5C9CA",
        color: "#fff",
        padding: "0",
        "&>p":{
            padding: ".5rem 1.5rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            "&:hover":{
                background: "#395B64",
                
            }
        }
    }
   
}));