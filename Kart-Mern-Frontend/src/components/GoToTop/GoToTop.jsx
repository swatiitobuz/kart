import React from 'react'
import useStyles from './styles'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@mui/material';

const GoToTop = () => {
    const classes = useStyles()

    // go to top
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <>
    <Button 
    className={classes.button}
        onClick={goToTop}
    >
        <ArrowUpwardIcon />
    </Button>
    </>
  )
}

export default GoToTop