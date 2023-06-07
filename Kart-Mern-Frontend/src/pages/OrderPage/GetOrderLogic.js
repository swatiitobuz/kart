import { getAllOrder, cancelOrder, searchProductsInOrder } from '../../redux/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GetOrderLogic = () => {
  const { userInfo } = useSelector(state => state.signInUser)
  const { loading, orders } = useSelector(state => state.getAllOrder)
  const { products } = useSelector(state => state.searchProductsInOrder)
  const { data: cancelled, error } = useSelector(state => state.cancelOrder)

  const [search, setSearch] = useState('')
  var [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState('')
  const orderFilter = ["All orders", "Pending", "Delivered", "Cancelled"]

  const API = process.env.REACT_APP_NODE_API

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const redirectHandler = (id) => {
    navigate(`/product/${id}`)
  }
  useEffect(() => {
    if (userInfo) {
      dispatch(getAllOrder(userInfo?._id))
    }
    else {
      navigate('/login')
    }
  }, [dispatch])

  useEffect(() => {
    if (!error) {

      setTimeout(() => {
        dispatch(getAllOrder(userInfo?._id))
      }, 1000)
    }
  }, [cancelled, dispatch, error])
  //cancel order
  const cancelOrderHandler = (id) => {
    dispatch(cancelOrder(id))
  }
  //search products in order
  const searchProductsInOrderHandler = (e) => {
    setSearch(e.target.value)
    dispatch(searchProductsInOrder(userInfo?._id, e.target.value))
  }

  // function to filter order based on status
  const filterOrder = (status) => {
    // filter orders based on status using backend api

    axios.get(`${API}/private/orders/${userInfo?._id}/filter?status=${status}`)
      .then(res => {
        setFiltered(res.data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (filter === "All orders") {
      setFiltered(orders && orders?.data)
    }
    else if (filter === "Pending") {
      filterOrder("pending")
    }
    else if (filter === "Delivered") {
      filterOrder("delivered")
    }
    else if (filter === "Cancelled") {
      filterOrder("cancelled")
    }
  }, [filter])

  return {
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

  }
}
