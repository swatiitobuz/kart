import React from 'react'
import { SingleProductLogic } from './SingleProductlogic'
import { Button, Rating } from '@mui/material';
import useStyles from "./styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CircularProgress } from '@mui/material';

const SingleProduct = () => {
  const classes = useStyles();
  const {
    product,
    show,
    setShow,
    addToWishHandler,
    addToCartHandler,
    isWishlist,
    selectSize,
    size,
    qty,
    setQty,
    color,
    setColor,
    outOfStock,
    itemLeft,
    addReview,
    rating,
    setRating,
    comment,
    setComment,
    loading
  } = SingleProductLogic();

  //calcyulate diff time
  const diffTime = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();

    // To calculate the time difference of two dates
    const Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.round(Difference_In_Days);
  }

  const changeImage = (featureimg) => {
    setShow(featureimg)
  }
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
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
        <div className={classes.left}>
          <div className={classes.imgContainer}>
            <img src={show} alt="" className={classes.img} />
          </div>
          <div className={classes.imageOption}>

            {
              product?.product?.featureimg.map((currentImg, index) => (
                <div className={classes.imageContainer} key={index}>
                  <img src={currentImg} alt={product?.product?.title} className={classes.img} onMouseOver={() => changeImage(currentImg)} />
                </div>
              ))
            }
          </div>

        </div>
        <div className={classes.right}>
          <div className={classes.details}>
            <h1 className={classes.title}>{product?.product?.title}</h1>
            <div className={classes.divider}></div>
            <p className={classes.price}><span style={{ color: "black" }}>Price: </span>₹{product?.product?.price}</p>

            <div className={classes.sizes}>
              <h3>Size:</h3>
              <div className={classes.sizeOption}>
                {
                  product?.product?.size.map((item, index) => (
                    <button className={
                      size === item ? classes.activeBtn : classes.sizeButton
                    }
                      onClick={selectSize}
                      value={item}
                      key={index}
                    >
                      {item}
                    </button>
                  ))
                }
              </div>
            </div>
            {/* colors */}
            <div className={classes.colors}>
              <h3>Color:</h3>
              <div className={classes.sizeOption}>
                {
                  product?.product?.color.map((item, index) => (
                    <button
                      key={index}
                      style={{ background: item }}
                      onClick={() => setColor(item)}
                      className={
                        color === item ? classes.activeColorBtn : classes.colorButton
                      }
                    ></button>
                  ))
                }
              </div>
            </div>
            {/* quantity */}
            <div className={classes.colors}>
              <h3>Quantity:</h3>
              <div className={classes.quantity}>
                <RemoveIcon fontSize="large" className={classes.margin} onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1)
                  }
                }} />
                <p>{qty}</p>
                <AddIcon fontSize="large" className={classes.margin} onClick={() => {
                  if (qty < 10) {
                    setQty(qty + 1)
                  }
                }} />

              </div>
            </div>
            <div className={classes.productInstruction}>
              <ul>
                <li>100% Cotton</li>
                <li>Machine wash</li>
                <li>Imported</li>
              </ul>
            </div>

          </div>

          <div className={classes.Actions}>

            {
              outOfStock ? <Button variant="contained" color="primary" className={classes.button} disabled>
                Out of Stock
              </Button>
                :
                <Button variant="contained" color="primary" className={classes.button} onClick={addToCartHandler}>
                  Add to Cart
                </Button>

            }

            {
              itemLeft &&
              <p style={{ color: "red", fontSize: "1.5rem" }}>Only {product?.product?.countInStock} left in stock</p>
            }

            {
              isWishlist && isWishlist.isPresent ?
                <Button variant="contained" color="success" className={classes.button} onClick={addToWishHandler} style={{ background: "green" }}>
                  Added to Wishlist
                </Button>
                :
                <Button variant="contained" color="primary" className={classes.button} onClick={addToWishHandler}>
                  Add to Wishlist
                </Button>
            }

          </div>
        </div>
      </div>

      <div className={classes.productDescription}>
        <h1>Product Details</h1>
        <p><span style={{ fontWeight: "bold" }}>Description:</span>{product?.product?.description}</p>

      </div>
      {
        product?.product?.reviews.length > 0 ?
          <div className={classes.reviewSection}>
            <div className={classes.starContainer}>
              <h1>Reviews</h1>
              <div className={classes.stars}>
                <Rating
                  name="simple-controlled"
                  style={{ color: '#185694', fontSize: "1.8rem" }}

                  value={Math.round(product?.product?.rating * 10) / 10}
                />
                <div className={classes.reviewCount}>
                  <p>
                    {
                      Math.round(product?.product?.rating * 10) / 10
                    } &nbsp;
                  </p>
                  <p>out of 5</p>
                </div>
                <div className={classes.starProgress}>
                  <div className={classes.progress}>
                    <h4>5 star</h4>
                    <div className={classes.progressBar}>
                      <div className={classes.progressFill} style={{
                        width: Math.round((product?.product?.numRatings[4]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }}></div>
                    </div>
                    <p>
                      {
                        Math.round((product?.product?.numRatings[4]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"

                      }
                    </p>
                  </div>
                  <div className={classes.progress}>
                    <h4>4 star</h4>
                    <div className={classes.progressBar}>
                      <div className={classes.progressFill} style={{
                        width: Math.round((product?.product?.numRatings[3]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }}></div>
                    </div>
                    <p>
                      {
                        Math.round((product?.product?.numRatings[3]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }
                    </p>
                  </div>
                  <div className={classes.progress}>
                    <h4>3 star</h4>
                    <div className={classes.progressBar}>
                      <div className={classes.progressFill} style={{
                        width: Math.round((product?.product?.numRatings[2]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }}></div>
                    </div>
                    <p>
                      {
                        Math.round((product?.product?.numRatings[2]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }
                    </p>
                  </div>
                  <div className={classes.progress}>
                    <h4>2 star</h4>
                    <div className={classes.progressBar}>
                      <div className={classes.progressFill} style={{
                        width: Math.round((product?.product?.numRatings[1]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }}></div>
                    </div>
                    <p>
                      {
                        Math.round((product?.product?.numRatings[1]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }
                    </p>
                  </div>
                  <div className={classes.progress}>
                    <h4>1 star</h4>
                    <div className={classes.progressBar}>
                      <div className={classes.progressFill} style={{
                        width: Math.round((product?.product?.numRatings[0]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }}></div>
                    </div>
                    <p>
                      {
                        Math.round((product?.product?.numRatings[0]?.count / product?.product?.numRatings?.reduce((a, b) => a + b.count, 0)) * 100) + "%"
                      }
                    </p>
                  </div>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.WriteReview}>
                  <Rating
                    name="simple-controlled"
                    style={{ color: '#185694', fontSize: "1.8rem" }}

                    value={rating}
                    onChange={(e) => {
                      setRating(e.target.value)
                    }}
                  />
                  <input type="text" placeholder="Write a review"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                    }}
                  />
                  <Button variant="contained" color="primary" className={classes.button} onClick={addReview}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className={classes.showReview}>
              {
                product?.product?.reviews.map((review, index) => (
                  <div className={classes.review} key={index}>
                    <div className={classes.reviewHeader}>
                      <div className={classes.reviewUser}>
                        <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="profile" />
                        <div className={classes.reviewUserName}>
                          <h3>{review.userName}</h3>
                          <div className={classes.circle}></div>
                          <p>
                            {
                              diffTime(
                                review.createdAt
                              ) < 1
                                ? "Just now"
                                :
                                diffTime(
                                  review.createdAt
                                ) < 24
                                  ? Math.floor(diffTime(
                                    review.createdAt
                                  )) + " hours ago"
                                  : diffTime(
                                    review.createdAt
                                  ) > 30
                                    ? Math.floor(diffTime(
                                      review.createdAt
                                    ) / 30) + " months ago"
                                    : Math.floor(diffTime(
                                      review.createdAt
                                    )) + " days ago"
                            }
                          </p>
                        </div>
                      </div>
                      <div className={classes.reviewRating}>
                        <Rating
                          name="simple-controlled"
                          style={{ color: '#185694', fontSize: "1.8rem" }}

                          value={review.rating}
                        />
                      </div>
                    </div>
                    <div className={classes.reviewBody}>
                      <p>
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))

              }
            </div>
          </div>
          :
          <div className={classes.add}>
            <p className={classes.not}>
              No reviews yet, Be the first to review
            </p>
            <div className={classes.WriteReview}>
              <Rating
                name="simple-controlled"
                style={{ color: '#185694', fontSize: "1.8rem" }}

                value={rating}
                onChange={(e) => {
                  setRating(e.target.value)
                }}
              />
              <input type="text" placeholder="Write a review"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value)
                }}
              />
              <Button variant="contained" color="primary" className={classes.button} onClick={addReview}>
                Add
              </Button>
            </div>
          </div>
      }


    </div>

  )
}

export default SingleProduct