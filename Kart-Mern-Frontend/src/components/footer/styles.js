
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#395B64",
        color: "#fff",
        fontSize: "2rem",
        "& hr": {
            width: "100%",
            border: "none",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.4)",
            margin: "2rem 0",
        },
    },
    top: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    Subscribe: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        "& h3": {
            fontWeight: "800",
            marginBottom: "1rem",
        },
        "& p": {
            fontSize: "1.8rem",
            fontWeight: "300",
            marginBottom: "1rem",
        },
    },
    input: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& input": {
            width: "300px",
            height: "4rem",
            border: "none",
            outline: "none",
            padding: "0 1rem",
            fontSize: "1.8rem",
            [theme.breakpoints.down("sm")]: {
                width: "260px",
            },
        },
        "& button": {
            marginLeft: "1rem",
            height: "4rem",
            padding: "0 1rem",
            fontSize: "1.8rem",
            backgroundColor:"#f0c14b",
            [theme.breakpoints.down("sm")]: {
                marginLeft: "0rem",
                marginTop:"1.5rem"
            },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    social: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        "& h3": {
            fontWeight: "800",
            marginBottom: "1rem",
        },

    },

    icons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& a": {
            color: "#fff",
            fontSize: "2rem",
            margin: "0 1rem",
            transition: "all 0.3s ease",
            "&:hover": {
                color: "#f0c14b",
            }
        }
    },

    links: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center"
        },
    },
    link: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        "& h3": {
            fontWeight: "800",
            marginBottom: "1rem",
        },
        "& ul": {
            listStyle: "none",
            padding: "0",
            margin: "0",
            "& li": {
                marginBottom: "0.5rem",
                "& a": {
                    color: "#fff",
                    fontSize: "1.8rem",
                    fontWeight: "300",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        color: "#f0c14b",
                    },
                },
            },
        },
    },
    bottom: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        padding: "1rem 0",
    },
    text: {
        fontSize: "1.8rem",
        fontWeight: "300",
        color: "#fff",
        margin: "0 1rem",
    },
    cards: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& i": {
            fontSize: "3rem",
            margin: "1rem",
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
                color: "#f0c14b",
            }
        }
    }

}))