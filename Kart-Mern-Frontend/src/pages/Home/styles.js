import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",

    },
    introContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "black",
        color: "white",
        height: "93vh",
        [theme.breakpoints.down("md")]: {
            flexDirection:"column",
            justifyContent:"center"
        }
    },
    textPart: {
        width: "50%",
        fontSize: "7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&>Button": {
            // borderRadius: "1rem",
            fontSize: "2rem",
            marginTop: "2rem",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            fontSize: "4rem",
            padding: "1rem 0",
            textAlign:"center",
            margin:"1rem 0",
            "&>Button": {
                fontSize: "1.5rem",
                margin: "1rem 0",
            }
        }
    },
    imgPart: {
        width: "40%",
        padding: "2.1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
          width:"100%",
          padding:"0"
        }
    },
    rectangle: {
        background: "#E7F6F2",
        width: "35rem",
        height: "56rem",
        borderRadius: "5rem",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            // display: "none"
        }


    },
    offer: {
        background: "#A5C9CA",
        borderRadius: "2.5rem 2.5rem .5rem 2.5rem",
        padding: "2rem",
        lineHeight: "1.5",
        fontSize: "2rem",
        width: "75%",
        color: "black",
        position: "absolute",
        top: "5%",
        right: "90%",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
    img: {
        width:"80%"

    },
    cardsContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        flexDirection: "column",
        '& h3': {
            fontSize: "3rem",
        }
    },
    cards: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem 0",

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            width: "90%"
        }
    },
    card: {
        width: "25%",
        height: "70rem",
        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            margin: "2rem 0",
        }
    },
    details: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        '& h4': {
            fontSize: "2rem",
        }

    },
    shop: {
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 0",
        fontSize: "1.6rem",
        '& svg': {
            fontSize: "2.4rem",
            cursor: "pointer",
            color: "black",
        }
    },
    timer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        fontSize: "1.6rem",
        color: "#395B64"
    },
    timerContainer: {
        width: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        '&>div': {
            margin: "0 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            '& p': {
                fontSize: "2rem",
            }
        },
        [theme.breakpoints.down("md")]: {
            // flexDirection: "column",
            width: "90%"
        }
    }
}
)
)