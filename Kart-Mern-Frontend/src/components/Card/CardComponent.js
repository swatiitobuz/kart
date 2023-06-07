import React from 'react'
import { Card, CardMedia, CardContent, Button } from '@mui/material';
import useStyles from "./styles";
import { useNavigate, useLocation } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
    deleteFromWishlist
} from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CardComponent = ({ product }) => {
    const { userInfo } = useSelector(state => state.signInUser)
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const dispatch = useDispatch()

    const redirectHandler = () => {
        navigate(`/product/${product?._id}`)
    }
    const [show, setShow] = React.useState(false);

    return (
        <div>
            <Card
                sx={{ margin: "1rem", cursor: "pointer", position: "relative", height: "40rem" }}

            >
                <CardMedia
                    component="img"
                    height="250"
                    image={product?.featureimg[0]}
                    onClick={redirectHandler}
                />
                <CardContent className={classes.details}
                >
                    {
                        path === "/wishlist"
                            ?
                            < h3 className={classes.title}  >{(product?.title).length > 20 ? (product?.title.substring(0, 16) + "...") : (product?.title)}</h3>
                            :
                            <h3 className={classes.title} >{(product?.title).length > 25 ? (product?.title.substring(0, 22) + "...") : (product?.title)}</h3>

                    }
                    <div className={classes.priceContainer}>
                        <p className={classes.price}>₹{product?.price}</p>
                        <Button style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#395B64',
                        "&:hover": {
                            backgroundColor: '#2f4a51',
                        }
                    }} onClick={redirectHandler}>
                        Buy Now
                        <KeyboardArrowRightIcon style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: '#fff',
                            marginLeft: '1rem',
                            backgroundColor: '#395B64',
                            borderRadius: '50%',
                            padding: '0.2rem',
                          
                        }}/>
                    </Button>
                    </div>
                    {/* Buy Now */}

                  

                    {
                        path === "/wishlist" && <MoreHorizIcon className={classes.more} fontSize="large" onClick={() => setShow(!show)} />
                    }

                    {
                        path === "/wishlist" && show &&
                        <div className={classes.dropdown}>
                            <p onClick={() => { dispatch(deleteFromWishlist(userInfo?._id, product?._id)) }}>Remove From Wishlist</p>
                        </div>
                    }
                </CardContent>


            </Card>
        </div >
    )
}

export default CardComponent