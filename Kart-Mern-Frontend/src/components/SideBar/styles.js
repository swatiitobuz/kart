import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '20%',
        minHeight: '95vh',
        backgroundColor: '#2C3333',
        "&>ul": {
            width: "100%",
            listStyle: 'none',
            paddingTop: "5rem",
            margin: 0,
            fontSize: "2rem",
            "&>li": {
              
                margin: "1rem 0",
                cursor: 'pointer',
                "&:hover": {
                    backgroundColor: '#395B64',
                    color: "white",
                },
                "&>a": {
                    padding: '1rem 1.7rem',
                    textDecoration: 'none',
                    width: "100%",
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    "&:hover": {
                        color: 'white'
                    }
                }
            }
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            minHeight: 'unset',
            "& ul": {

                display: "flex",
                flexDirection: 'row',
                paddingTop: "0rem",
                justifyContent: "center",
                "& li": {
                    "& a": {
                        "& p": {
                            display: "none"
                        }
                    }
                }
            }
        }

    }
}))