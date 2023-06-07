
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    MainContainer: {
        width: "100%",
        background: "#395B64",
        display: "flex",
        color: "white",
        alignItems: "center",


    },
    Menucontainer:{
        width: "100%",
        color: "white",
        padding: "1rem 0",
        fontSize: "2rem",
        position: "relative",
        display: "block",
        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },
    MenuListcontainer:{
        position: "absolute",
        top: "100%",
        left: "0",
        background: "#395B64",
        opacity: ".9",
        width: "100%",
        zIndex: "100",
        "& ul":{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            listStyle: "none",
            padding: "0",
            margin: "0",
            "& li":{
                "& a":{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.5rem",
                    "& h4":{
                        padding: "1rem 0"
                    },
                    "&:hover":{
                        color: "#F2C94C"
                    }
                }
            }
        }
    },
    link:{
        textDecoration:"none",
        color:"white",
        "&:hover":{
            color:"#f0c14b"
        }
    },
    listItem:{
        "&>button":{
            margin: "1rem 0 1.5rem 0",
            "&:hover":{
                backgroundColor: '#2f4a51',
            }
        }
    },
    container: {
        width: "100%",
        display: "flex",
        color: "white",
        padding: "1rem 0",
        fontSize: "2rem",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            display: "none"
        }

    },
    left: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        marginLeft: "3rem"
    },
    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        cursor: "pointer",
        margin: "0 1rem"
    },
    categories: {
        display: "flex",
        alignItems: "center",
        marginLeft: "1rem",
        "& h4": {
            margin: "0 1rem",
            cursor: "pointer"
        }
    },
    right: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "3rem"
    },
    search: {
        width: "40%",
        display: "flex",
        alignItems: "center",
        background: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        color: "black",
        "& input": {
            border: "none",
            outline: "none",
            width: "100%"
            // marginLeft: "0.5rem"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center",
        marginLeft: "1rem",
       
    },
    icon:{
        margin: "0 1rem",
        cursor: "pointer",
        color: "white",
        textDecoration: "none",
    }

}))