import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {
  getCart,
  deleteProductFromCart
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

const Cart = () => {

  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartProduct, loading } = useSelector(state => state.getCart)
  const { userInfo } = useSelector(state => state.signInUser)
  const { data: deleteProduct, error } = useSelector(state => state.deleteProductFromCart)

  const checkoutHandler = () => {
    if (cartProduct && cartProduct.cart.length !== 0) {
      navigate('/checkout')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Add product to your cart to checkout',
      })
    }
  }
  useEffect(() => {
    if (!error) {
      setTimeout(() => {
        dispatch(getCart(userInfo?._id))
      }, 1000)
    }
  }, [deleteProduct, dispatch, error])
  useEffect(() => {
    if (userInfo) {
      dispatch(getCart(userInfo?._id))
    } else {
      navigate('/login')
    }
  }, [dispatch, userInfo, navigate])

  const redirectHandler = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className={classes.root}>
      {
        cartProduct && cartProduct.cart.length !== 0 ?
          <div className={classes.container}>
            {/* cart */}
            <div className={classes.cart}>
              <h1 className={classes.cartTitle}>My Shopping Cart</h1>
              {/* <div className={classes.cartItem}> */}
              {cartProduct &&
                cartProduct.cart.map(
                  (product, index) => {
                    return (

                      <div className={classes.cartContainer} key={index}>
                        {
                          loading ? <CircularProgress size={50}
                            sx={{
                              color: "green",
                              position: 'absolute',
                              top: "1rem",
                              left: "2rem",
                              zIndex: 1,
                            }} /> :
                            <Card className={classes.card} >
                             
                              <CardMedia
                                className={classes.media}
                                component="img"
                                image={product.product.featureimg[0]}
                                sx={{ width: "20rem" }}
                                onClick={() => redirectHandler(product.product._id)}

                              />
                              <CardContent className={classes.cardContent}
                                onClick={() => redirectHandler(product.product._id)}
                              >

                                <h3>{product.product.title}</h3>
                                <h3>₹{product.product.price}</h3>
                              </CardContent>
                              <CardActions className={classes.cardActions}>
                                <IconButton onClick={() => { dispatch(deleteProductFromCart(userInfo?._id, product.product._id)) }} >
                                  <HighlightOffIcon fontSize='large' />
                                </IconButton>
                              </CardActions>
                            </Card>
                        }

                      </div>

                    );
                  })}

            </div>

            <Card className={classes.cardTotal}>
              <div className={classes.content}>
                <h1>Subtotal</h1>
                <h1>₹{cartProduct && cartProduct.cart.reduce((acc, item) => acc + Number(item.product.price), 0)}</h1>
              </div>
              <Button variant="contained" color="primary" className={classes.button} onClick={checkoutHandler} >
                Checkout
              </Button>
            </Card>

          </div>
          :
          <div className={classes.emptyCart}>
            <h1>Your cart is empty!</h1>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => navigate('/')} >
              Shop Now
            </Button>
          </div>
      }

    </div>
  )
}

export default Cart
