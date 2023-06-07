import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        position: "relative"
    },

    products: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        // gridGap: "2rem",
        padding: "2rem 0",
        // background: "#E7F6F2"
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
            padding: "1rem 0"
        }
    },
    empty:{
        display: 'flex',
        width: '100%',
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        "&>h1":{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#395B64"
        },
        "&>Button":{
            margin: '2rem auto',
            padding: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            width: '20%',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            }
        }

    }


}
)
)