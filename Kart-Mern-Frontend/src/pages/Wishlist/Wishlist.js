import React, { useEffect } from 'react'
import useStyles from "./styles";
import CardComponent from '../../components/Card/CardComponent'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {
  getWishlist,
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

const Wishlist = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { wishlistProduct, loading } = useSelector(state => state.getWishlist)
  const { userInfo } = useSelector(state => state.signInUser)
  const { data: deleteProduct, error } = useSelector(state => state.deleteFromWishlist)

  useEffect(() => {
    if (!error) {

      setTimeout(() => {
        dispatch(getWishlist(userInfo?._id))
      }, 1000)
    }
  }, [deleteProduct, dispatch, error])

  useEffect(() => {
    if (userInfo) {
      dispatch(getWishlist(userInfo?._id))
    } else {
      navigate('/login')
    }
  }, [dispatch, userInfo, navigate])

  return (
    <div className={classes.root}>
      {
        wishlistProduct && wishlistProduct.wishlist.length !== 0 ?
          <div className={classes.container}>
            {
              loading ? <CircularProgress size={50}
                sx={{
                  color: "green",
                  position: 'absolute',
                  top: "1rem",
                  left: "2rem",
                  zIndex: 1,
                }} /> :
                <div className={classes.products}>
                  {wishlistProduct &&
                    wishlistProduct.wishlist.map(
                      (product, index) => {
                        return (
                          <CardComponent product={product?.product} key={index} />

                        );
                      })}
                </div>
            }

          </div>
          :
          <div className={classes.empty}>
            <h1 className={classes.emptyTitle}>Your Wishlist is Empty!</h1>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => navigate('/')} >
              Browse
            </Button>
          </div>
      }
    </div>
  )
}

export default Wishlist