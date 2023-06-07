import React from 'react'
import useStyles from './styles'
import SideBar from '../../components/SideBar/SideBar'
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { GetOrderLogic } from './GetOrderLogic';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const OrderPage = () => {
  const classes = useStyles()
  const {
    orders,
    cancelOrderHandler,
    redirectHandler,
    searchProductsInOrderHandler,
    search,
    products,
    setFilter,
    filter,
    orderFilter,
    filtered,
    loading
  } = GetOrderLogic()

  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.orderContainer}>
        <div className={classes.orderHeader}>
          <div className={classes.search}>
            <SearchIcon fontSize='large' />
            <input type="search"
              className={classes.searchInput}
              placeholder="Search in your orders"
              value={search}
              onChange={(e) => searchProductsInOrderHandler(e)}
            />
          </div>
          <div className={classes.filter}>
            <select
              onChange={(e) => {
                setFilter(e.target.value)
              }}
            >
              {orderFilter.map((orderFilter) => (
                <option
                  key={orderFilter}
                  value={orderFilter}
                >
                  {orderFilter}
                </option>
              ))}
            </select>
          </div>
        </div>
        {
          loading && <CircularProgress size={50}
            sx={{
              color: "green",
              zIndex: 1,
            }} 
            className={
              classes.loading
            }
            />
        }
        {
          // no orders to show
          ((orders && orders?.data.length === 0)
          ) &&
          <div className={classes.empty}>
            <h1 className={classes.emptyTitle}>
              You have no orders!
            </h1>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => navigate('/')} >
              Shop Now
            </Button>
          </div>
        }
        {/* start of order body */}
        {/* if search is enabled show search results else all orders */}
        {/* if orderfilter value is changed then filtered prodicts are shown else all orders */}
        {search ? (
          <div className={classes.orderBody}>
            {products &&
              products?.data.map(
                (product, index) => {
                  return (
                    <Card key={index}
                      className={classes.card}>

                      <CardMedia
                        component="img"
                        className={classes.cardImg}
                        image={product?.product?.featureimg[0]}
                      />
                      <CardContent className={classes.details}>
                        <h3 className={classes.title}
                          onClick={() => redirectHandler(product?.product?._id)}
                        >{product?.product?.title}</h3>
                        <p className={classes.price}>₹{product?.product?.price}</p>
                        <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        {
                          product?.status !== 'cancelled' && product?.status !== "delivered" &&
                          <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Product will be Delivered by Next Week</p>
                        }
                        {
                          product?.status === 'cancelled' ? (
                            <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong style={{ color: "red" }}> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                          ) :
                            product?.status === "delivered" ?
                              (
                                <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong style={{ color: "green" }}> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                              )
                              :
                              (
                                <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                              )
                        }
                        <h2 style={{ fontSize: '2rem', margin: '.5rem 0', paddingBottom: "2rem" }}>Order Total: ₹{product.amount}</h2>
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                        {
                          product?.status === 'cancelled' ? (
                            <Button variant="contained" color="error" disabled>
                              Cancelled
                            </Button>
                          ) :
                            product?.status === "delivered" ? (
                              <Button variant="contained" color="success" >
                                Delivered
                              </Button>
                            ) :
                              (
                                <Button variant="contained" color="error" onClick={() => { cancelOrderHandler(product._id) }} >
                                  Cancel Order
                                </Button>
                              )
                        }

                      </CardActions>

                    </Card>
                  );
                })}
          </div>

        )
          :
          (filter ? (
            <div className={classes.orderBody}>
              {
                filtered.map(
                  (product, index) => {
                    return (
                      <Card key={index}
                        className={classes.card}>
                        <CardMedia
                          component="img"
                          className={classes.cardImg}
                          image={product?.product?.featureimg[0]}
                        />
                        <CardContent className={classes.details}>
                          <h3 className={classes.title}
                            onClick={() => redirectHandler(product?.product?._id)}
                          >{product?.product?.title}</h3>
                          <p className={classes.price}>₹{product?.product?.price}</p>
                          <p className={classes.description}>
                            {
                              product?.product?.description.slice(0, 130)
                            }
                          </p>
                          {
                            product?.status !== 'cancelled' && product?.status !== "delivered" &&
                            <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Product will be Delivered by Next Week</p>
                          }
                          {
                            product?.status === 'cancelled' ? (
                              <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong style={{ color: "red" }}> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                            ) :
                              product?.status === "delivered" ?
                                (
                                  <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong style={{ color: "green" }}> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                                )
                                :
                                (
                                  <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                                )
                          }
                          <h2 style={{ fontSize: '2rem', margin: '.5rem 0', paddingBottom: "2rem" }}>Order Total: ₹{product.amount}</h2>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                          {
                            product?.status === 'cancelled' ? (
                              <Button variant="contained" color="error" disabled>
                                Cancelled
                              </Button>
                            ) :
                              product?.status === "delivered" ? (
                                <Button variant="contained" color="success" >
                                  Delivered
                                </Button>
                              ) :
                                (
                                  <Button variant="contained" color="error" onClick={() => { cancelOrderHandler(product._id) }} >
                                    Cancel Order
                                  </Button>
                                )
                          }

                        </CardActions>

                      </Card>
                    );
                  })}
            </div>
          ) : (

            // map filtered if filter has a value else orders

            <div className={classes.orderBody}>
              {orders &&
                orders.data.map(
                  (product, index) => {
                    return (

                      <Card key={index}
                        className={classes.card}>

                        <CardMedia
                          component="img"
                          className={classes.cardImg}
                          image={product?.product?.featureimg[0]}
                        />
                        <CardContent className={classes.details}>
                          <h3 className={classes.title}
                            onClick={() => redirectHandler(product?.product?._id)}
                          >{product?.product?.title}</h3>
                          <p className={classes.price}>₹{product?.product?.price}</p>
                          <p className={classes.description}>
                            {
                              product?.product?.description.slice(0, 130)
                            }
                          </p>
                          {
                            product?.status !== 'cancelled' && product?.status !== "delivered" &&
                            <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Product will be Delivered by Next Week</p>
                          }

                          {
                            product?.status === 'cancelled' ? (
                              <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong style={{ color: "red" }}> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                            ) :
                              product?.status === "delivered" ?
                                (
                                  <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong style={{ color: "green" }}> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                                )
                                :
                                (
                                  <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong> {product.status.charAt(0).toUpperCase() + product.status.slice(1)} </strong></p>
                                )
                          }
                          <h2 style={{ fontSize: '2rem', margin: '.5rem 0', paddingBottom: "2rem" }}>Order Total: ₹{product.amount}</h2>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                          {
                            product?.status === 'cancelled' ? (
                              <Button variant="contained" color="error" disabled>
                                Cancelled
                              </Button>
                            ) :
                              product?.status === "delivered" ? (
                                <Button variant="contained" color="success" >
                                  Delivered
                                </Button>
                              ) :
                                (
                                  <Button variant="contained" color="error" onClick={() => { cancelOrderHandler(product._id) }} >
                                    Cancel Order
                                  </Button>
                                )
                          }
                        </CardActions>

                      </Card>

                    );
                  })}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderPage