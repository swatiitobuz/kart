import React from 'react'
import useStyles from "./styles";
import SideBar from '../../components/SideBar/SideBar'
import { Button } from '@mui/material';
import { PassLogic } from './resetPasswordLogic';

const ResetPassword = () => {
    const classes = useStyles();

    const {
        pass,
        setpass,
        confirmpass,
        setconfirmpass,
        resetPassHandler
    } = PassLogic()

    return (
        <div className={classes.container}>
            <SideBar />
            {/* reset password  */}
            <div className={classes.formContainer}>
                <h1>Reset Password</h1>
                <form className={classes.form}>
                    <div className={classes.inputContainer}>
                        <h3 className={classes.inputLabel}> Password</h3>
                        <input type="password" id="password" placeholder="Enter new password"
                            value={pass}
                            onChange={(e) => setpass(e.target.value)}
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <h3 className={classes.inputLabel}>Confirm Password</h3>
                        <input type="password" id="confirmPassword" placeholder="Confirm new password"
                            value={confirmpass}
                            onChange={(e) => setconfirmpass(e.target.value)}
                        />
                    </div>
                    <Button variant='contained' className={classes.button}
                        onClick={resetPassHandler}
                    >Update</Button>
                </form>
            </div>

        </div>
    )
}

export default ResetPassword