import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100vh",
        background: "#f5f5f5",
        display: "flex",
        color: "white",
        padding: "1rem 0",
        fontSize: "2rem",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        "& a": {
            color: "black",
            // textDecoration:"none"
        }

    },
    formContainer: {
        width: "45%",
        height: "60%",
        display: "flex",
        justifyContent: "center",
        background: "#395B64",
        alignItems: "center",
        padding: "1rem",
        borderRadius: "1rem",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
            width: "90%",
            height: "60%",
            borderRadius: "0"
        }
    },
    form: {
        width: "100%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",


    },
    inputContainer: {
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1rem",
        "& label": {
            width: "0%",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: ".5rem"
        },
        "& input": {
            width: "70%",
            height: "2rem",
            borderRadius: ".5rem",
            border: "none",
            outline: "none",
            padding: "1rem .5rem",
            fontSize: "1.5rem"
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
    button: {
        width: "20%",
        fontSize: "2rem !important",
        background: "#395B64",
        color: "white",
        "&:hover":{
            backgroundColor: '#2f4a51',
        },
        [theme.breakpoints.down("md")]: {
            width: "60%",
            fontSize: "1.5rem !important",
        }
    },
}))