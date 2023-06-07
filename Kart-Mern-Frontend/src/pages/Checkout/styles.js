import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    Maincontainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        // padding: "2rem 0",
        textAlign: "center",
        "&>h1": {
            background: "#E7F6F2",
            padding: "1rem",
            fontSize: "3rem",
        }
    },
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    absolute: {
        position: "absolute",
        top: "1.2rem",
        right: "0",
        cursor: "pointer",
        fontSize: "1.5rem !important",
    },
    noneditbox: {
        position: "relative",
        display: "flex",
        width: "100%",
        "&>h2": {
            width: "30%",
            fontSize: "2rem",
            padding: "1rem 0",
        },
        "&>div": {
            width: "50%",
            padding: "1rem 0",
            fontSize: "1.5rem"
        },
        "&>p": {
            flex: 1,
        }
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    margin: {
        backgroundColor: '#e0e0e0',
        padding: '0.5rem',
        margin: '1.5rem',
        cursor: "pointer",
        "&:hover": {
            boxShadow: '0 0 .3rem 0 rgba(0,0,0,0.2)',
        },
    },
    Left: {
        width: "40%",
        padding: "1rem",
        textAlign: "left",
        height: "100%",
    },
    boxContainer: {
        width: "100%",
        height: "100%",
        position: "relative",

        "&>h2": {
            fontSize: "2rem",
            padding: "1rem 0",
        }
    },
    AddressBox: {
        width: "100%",
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: ".5rem",
        padding: "1rem 0 0",
        "&>h4": {
            fontSize: "1.5rem",
            fontWeight: "500",
            marginBottom: "1rem",
            paddingLeft: "1rem"
        }
    },
    trigger: {
        fontSize: "1.6rem",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: ".5rem 0",
        marginLeft: "1rem"
    },
    modalContainer: {
        width: "100%",
        height: "100%",
    },
    modal: {
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        // padding: "1rem",
        flexDirection: "column",
        alignItems: "center",

    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        "& > div": {
            margin: "1rem 0",
            "& > label": {
                fontSize: "1.6rem",
                lineHeight: "2.5rem",
                fontWeight: "600",
            },
            "& > input": {
                width: "100%",
                padding: "0.5rem",
                fontSize: "1.6rem",
                lineHeight: "2.5rem",
                border: "1px solid #000",
                borderRadius: "5px",
            },
            "& > select": {
                width: "100%",
                padding: "0.5rem",
                fontSize: "1.6rem",
                lineHeight: "2.5rem",
                border: "1px solid #000",
                borderRadius: "5px",
            },

        },
        "& > button": {
            width: "50%",
            margin: "1rem auto 0rem auto",
            fontSize: "1.6rem",
            padding: '1rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            }
        },
    },
    divider: {
        width: "100%",
        height: "1px",
        background: "#ccc",
        // margin: "1rem auto",
    },
    Address: {
        display: "flex",
        border: "1px solid #ccc",
        padding: ".5rem",
        background: "#E7F6F2",
        marginTop: "1rem",
        borderRadius: ".5rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem",
        "&>input": {
            width: "1rem",
            height: "1rem",
            marginRight: "1rem",
        }
    },
    AddressDetails: {
        width: "100%",
        fontSize: "1.5rem",
        marginLeft: "1rem",

    },
    bottomContainer: {
        width: "100%",
        background: "#f5f5f5",
        border: "1px solid #ccc",
        padding: "1rem 0",
        borderRadius: ".5rem",
        " &>button": {
            marginLeft: "2rem",
            fontSize: "1.3rem",
            padding: '1rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            }
        }
    },
    Payment: {
        display: "flex",
        padding: ".5rem",
        fontSize: "1.5rem",
        marginTop: "1rem",
        margin: "1rem",
        alignItems: "center",
        "&>input": {
            width: "1rem",
            height: "1rem",
            marginRight: "1rem",
        }
    },
    cartContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
    },
    card: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        boxShadow: '0 0 1rem 0 rgba(0,0,0,0.1)',
        cursor: 'pointer',

    },
    media: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    cardContent: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: "2rem",
        textAlign: "left"
    },
    Right: {
        width: "30%",
    },
    cardTotal: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '1rem',
        padding: '1rem',
        "&>Button": {
            margin: '2rem auto',
            padding: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            width: '50%',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            }
        }

    },
    description: {
        fontSize: "1.5rem"
    },
    paymentContainer: {
        display: 'flex',
        fontSize: "2rem",
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1rem auto',
    }
}))