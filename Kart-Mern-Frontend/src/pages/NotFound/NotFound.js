import React, { useEffect, useState } from 'react'
import useStyles from "./styles";
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const classes = useStyles();
  const [pathName, setPathName] = useState("")
  // get path
  const location = useLocation()

  useEffect(() => {
    setPathName(location.pathname.slice(1, location.pathname.length))
  }, [location.pathname])

  return (
    <div className={classes.container}>
      <h1>{
      // first letter to uppercase
        pathName.charAt(0).toUpperCase() + pathName.slice(1, pathName.length)
      }
      </h1>
      <p>
        Sorry, this page isn't available.
        </p>
      <p>
        The link you followed may be broken, or the page may have been removed.
        </p>
      <p>
        Go back to <a href="/">Home</a>
      </p>
    </div>
  )
}

export default NotFound