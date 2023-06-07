import { Button } from '@mui/material';
import React from 'react'
import useStyles from "./styles";
import { RegisterLogic } from './RegisterLogic';

const Register = () => {
    const classes = useStyles();
    const {
        email,
        setEmail,
        password,
        setPassword,
        mobile,
        setMobile,
        signupHandler
    } = RegisterLogic();
    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                    <h1 className={classes.heading}>Create an account</h1>
                  
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Email</label>
                        <input
                            type="email"
                            className={classes.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Mobile No.</label>
                        <input type="text"
                            name="country_code"
                            className={classes.input}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required pattern="[1-9]{1}[0-9]{9}" />
                    </div>
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Password</label>
                        <input
                            type="password"
                            className={classes.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                  
                    <Button variant="contained" color="primary" className={classes.button} onClick={signupHandler} >Register</Button>
                    <div style={{ color: "black", marginTop: "1rem" }}>
                        Already have an account? <a href='/login'>Login</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register