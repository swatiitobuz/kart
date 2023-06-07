import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    button:{
        position: 'fixed !important',
        bottom: '2rem',
        right: '2rem',
        zIndex: '1000',
        backgroundColor: '#f0c14b !important',
        color: '#000 !important',
        padding: '1rem !important',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        minWidth:"unset !important",
       '& svg':{
        fontSize:"3rem"
       }
    }
}))