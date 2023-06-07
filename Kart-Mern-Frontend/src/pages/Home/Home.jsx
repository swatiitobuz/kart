import React, { useState } from 'react'
import useStyles from "./styles";
import girl from '../../assets/girl-with-bags.png'
import { Button } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';
import hoodies from '../../assets/hoodies.jpg'
import jeans from '../../assets/jeans.jpg'
import dresses from '../../assets/dresses.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    const classes = useStyles();

    const [days,setDays] = useState("00")
    const [hours,setHours] = useState("00")
    const [minutes,setMinutes] = useState("00")
    const [seconds,setSeconds] = useState("00")

    const startTimer = () => {
        const countdownDate = new Date("May 31, 2023 00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    }

    startTimer();


    return (
        // mainContainer
        <div className={classes.container}>
            {/* container with intro img and text */}
            <div className={classes.introContainer}>
                <div className={classes.textPart}>
                    <div>
                        <h5 style={{ marginLeft: "1rem" }}>Shop</h5>
                        <h2>Anytime</h2>
                        <h2>Anywhere</h2>
                    </div>

                    <Button variant="contained" >Start Shopping &raquo;</Button>
                </div>
                <div className={classes.imgPart}>
                    <div className={classes.rectangle}>
                        {/* <div className={classes.imgContainer}> */}
                            
                    <img src={girl} alt="" className={classes.img} />
                        {/* </div> */}
                    <div className={classes.offer}>40% Off <br />on orders above Rs 3999</div>
                    </div>
                   

                  

                </div>

            </div>
            {/* timer for sale */}
            <div className={classes.timer}>
                <h3>Offer Ends in</h3>
                <div className={classes.timerContainer}>
                    <div className={classes.timerBox}>
                        <h1>{days}</h1>
                        <p>Days</p>
                    </div>
                    <div className={classes.timerBox}>
                        <h1>{hours}</h1>
                        <p>Hours</p>
                    </div>
                    <div className={classes.timerBox}>
                        <h1>{minutes}</h1>
                        <p>Minutes</p>
                    </div>
                    <div className={classes.timerBox}>
                        <h1>{seconds}</h1>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
            {/* container with cards */}
            <div className={classes.cardsContainer}>
                <h3>2023 New Arrivals</h3>
                <div className={classes.cards}>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="600"
                            image={hoodies}
                        />
                        <CardContent className={classes.details}
                        >
                            <h4>Hoodies and Sweatshirt</h4>
                            <div className={classes.shop}>
                                <p>Shop Now!</p>
                                <a href="/search?q=hoodies"><ArrowForwardIcon /></a>
                            </div>
                        </CardContent>


                    </Card>
                    <Card className={classes.card} >
                        <CardMedia
                            component="img"
                            height="600"
                            image={jeans}
                        />
                        <CardContent className={classes.details}
                        >
                            <h4>Jeans and Trousers</h4>
                            <div className={classes.shop}>
                                <p>Shop Now!</p>
                                <a href="/search?q=jeans"><ArrowForwardIcon /></a>
                            </div>
                        </CardContent>


                    </Card>
                    <Card className={classes.card} >
                        <CardMedia
                            component="img"
                            height="600"
                            image={dresses}
                        />
                        <CardContent className={classes.details}
                        >
                            <h4>Dresses</h4>
                            <div className={classes.shop}>
                                <p>Shop Now!</p>
                                <a href="/search?q=dress"><ArrowForwardIcon /></a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div >
    )
}

export default Home