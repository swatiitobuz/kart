import React from 'react'
import useStyles from './styles'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    // my details, my orders, account settings> logout
    <div className={classes.container}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <NavLink to='/profile'
            style={({ isActive }) => ({
              color: isActive ? '#f0c14b' : '#fff',
            })}
          >
            <ManageAccountsIcon fontSize='large' sx={{ paddingRight: { "md": "2rem", "sm": "0" } }} />
            <p>Account Settings</p>
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink to='/orders'
            style={({ isActive }) => ({
              color: isActive ? '#f0c14b' : '#fff',
            })}>
            <ListAltIcon fontSize='large' sx={{ paddingRight: { "md": "2rem", "sm": "0" } }} />
            <p>My Orders</p>
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink to='/reset-password'
            style={({ isActive }) => ({
              color: isActive ? '#f0c14b' : '#fff',
            })}>
            <LockResetIcon fontSize='large' sx={{ paddingRight: { "md": "2rem", "sm": "0" } }} />
            <p>Reset Password</p>
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink to='/' onClick={() => dispatch(logoutUser())}>
            <LogoutIcon fontSize='large' sx={{ paddingRight: { "md": "2rem", "sm": "0" } }} />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar