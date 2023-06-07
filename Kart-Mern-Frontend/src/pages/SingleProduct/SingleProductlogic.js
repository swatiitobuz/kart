import { useParams, useNavigate } from 'react-router-dom';
import { getSingleProduct } from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
    addToWishlist,
    checkIfWishlist,
    addToCart,
    addRatings
} from '../../redux/actions/productAction';
import { getSingleUser } from "../../redux/actions/userAction";
import Swal from 'sweetalert2';

export const SingleProductLogic = () => {
    const { isWishlist } = useSelector(state => state.checkIfWishlist)
    const { userInfo } = useSelector(state => state.signInUser)
    const { product,loading } = useSelector(state => state.getSingleProduct)
    const { user } = useSelector((state) => state.getSingleUser);
    const { data: ratingAdded } = useSelector((state) => state.addRatings)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        dispatch(getSingleProduct(id))

    }, [dispatch, id])

    const [show, setShow] = useState()
    const [size, setSize] = useState("")
    const [qty, setQty] = useState(1)
    const [color, setColor] = useState("")
    const [outOfStock, setOutOfStock] = useState(false)
    const [itemLeft, setItemLeft] = useState()

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")


    useEffect(() => {
        dispatch(getSingleUser(userInfo?._id));
    }, [dispatch, userInfo]);

    const addReview = () => {

        if (user) {
            if (rating) {
                dispatch(addRatings(product?.product?._id, user?.user?.name, rating, comment))
            }
            else {
                Swal.fire({
                    icon: 'error',
                    text: 'Please add rating',
                })
            }
        }
    }

    useEffect(() => {
        if (ratingAdded?.success) {
            setRating(0)
            setComment("")
            dispatch(getSingleProduct(id))
        }
    }, [ratingAdded, id])


    useEffect(() => {
        setShow(product?.product?.featureimg[0])
    }, [product?.product?.featureimg])

    useEffect(() => {

        if (product?.product?._id !== undefined) {
            dispatch(checkIfWishlist(userInfo?._id, product?.product?._id))
        }

    }, [dispatch, product?.product?._id, userInfo?._id])

    useEffect(() => {
        if (product) {
            if (product?.product?.countInStock === 0) {
                setOutOfStock(true)
            }
            else {
                setOutOfStock(false)
            }
        }


    }, [product])

    useEffect(() => {
        if (product) {
            if (product?.product?.countInStock < 5 && product?.product?.countInStock > 0) {
                setItemLeft(true)
            }
            else {
                setItemLeft(false)
            }
        }
    }, [product])

    const addToWishHandler = () => {
        if (userInfo) {
            if (isWishlist?.isPresent === false) {
                setTimeout(() => {

                    dispatch(addToWishlist(userInfo?._id, product?.product?._id))

                }, 1500);
                Swal.fire({

                    icon: 'success',
                    text: 'Added to wishlist',

                })
            }
            else {
                Swal.fire({
                    icon: 'info',
                    text: 'Already in wishlist!',
                })
            }
        } else {
            navigate('/login')
        }
    }

    // select size
    const selectSize = (e) => {
        setSize(e.target.value)
    }

    const addToCartHandler = () => {

        if (userInfo) {
            if (product) {
                if (size && color && qty) {
                    dispatch(addToCart(userInfo?._id, product?.product?._id))
                    Swal.fire({

                        icon: 'success',
                        text: 'Added to cart',

                    })
                    navigate('/cart')
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        text: 'Please select size, color and quantity',
                    })
                }
            }

        } else {
            navigate('/login')
        }
    }

    return {
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
    }
}