import React from 'react'
import useStyles from "./styles";
import SideBar from '../../components/SideBar/SideBar';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ProfileLogic } from './ProfileLogic'
import Avatar from '@mui/material/Avatar';

const UserProfile = () => {
  const classes = useStyles();
  const {
    user,
    name,
    setName,
    email,
    mobile,
    address,
    pincode,
    city,
    state,
    setEmail,
    setMobile,
    setAddress,
    setPincode,
    setCity,
    setState,
    updateUserHandler,
    dp,
    convertToBase64
  } = ProfileLogic()


  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.settingsContainer}>
        <div className={classes.profilePicture}>
       
          {
            user?.user?.avatar === '' ?
              <Avatar sx={{ width: 150, height: 150 }} /> :
              dp === '' ?
                <img src={user?.user?.avatar} alt={user?.user?.name} /> :
                <img src={dp} alt={user?.user?.name} />
          }

          <div className={classes.profilePictureButton}>
            <EditIcon fontSize="medium" />
            <input type="file" id="file" accept=".png,.jpg,.jpeg" onChange={convertToBase64} />
          </div>
        </div>

        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}> Name</h3>
          <input type="text" placeholder=" Name"
            value={name === '' ? user && user.user.name : name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Email</h3>
          <input type="text" placeholder="Email"
            value={email === '' ? user && user.user.email : email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Mobile</h3>
          <input type="text" placeholder="Mobile"
            value={mobile === '' ? user && user.user.mobile : mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Address</h3>
          <input type="text" placeholder="Address"
            value={address === '' ? user && user.user.address : address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>City</h3>
          <input type="text" placeholder="City"
            value={city === '' ? user && user.user.city : city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>State</h3>
          <input type="text" placeholder="State"
            value={state === '' ? user && user.user.state : state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>


        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Zip Code</h3>
          <input type="text" placeholder="Zip Code"
            value={pincode === '' ? user && user.user.pincode : pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <Button variant='contained' className={classes.button}
          onClick={updateUserHandler}
        >Update</Button>

      </div>
    </div>
  )
}

export default UserProfile