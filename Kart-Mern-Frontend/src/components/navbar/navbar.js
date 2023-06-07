import React, { useState } from 'react'
import useStyles from "./styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productAction'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { searchProduct } from '../../redux/actions/productAction'

const Navbar = () => {
    const classes = useStyles();
    const { userInfo } = useSelector((state) => state.signInUser)
    const categoryList = [
        { value: 'Men', label: 'Men' },
        { value: 'Women', label: 'Women' }
    ]
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const redirectHandler = (category) => {
        dispatch(getAllProducts(category))

    }
    //search state variable
    const [search, setSearch] = useState('')
    //search handler
    const searchHandler = (e) => {
        //filter from all products
        
        navigate(`/search?q=${e.target.value}`)
        dispatch(searchProduct(e.target.value))
      
    }
    const [show, setShow] = useState(false)
    return (
        <div className={classes.MainContainer}>
            <div className={classes.Menucontainer}>
                {
                    show ?
                        <CloseIcon onClick={() => setShow(!show)} fontSize="large" sx={{ padding: "0 1rem" }} className={classes.MenuIcon} />
                        :
                        <MenuIcon onClick={() => setShow(!show)} fontSize="large" sx={{ padding: "0 1rem" }} className={classes.MenuIcon} />

                }
                {
                    show &&
                    <div className={classes.MenuListcontainer} onClick={()=>setShow(false)}>
                        <ul>
                            <li>
                                <div className={classes.logo}>
                                    <Link to="/" className={classes.link}>
                                        <h1>KART</h1>
                                    </Link>
                                </div>
                            </li>
                            {
                                categoryList.map((category,index) => (
                                    <li key={index}>
                                        <Link to={`/see-products?category=${category.value}`} className={classes.link} onClick={() => { redirectHandler(category.value) }} >
                                            <h4>{category.label}</h4>
                                        </Link>
                                    </li>
                                ))
                            }

                            <li>
                                {
                                    userInfo ?
                                        <Link to="wishlist">
                                            <h4>Wishlist</h4>
                                        </Link>
                                        :
                                        ""
                                }
                            </li>
                            <li>

                                <Link to="cart">
                                    <h4>Cart</h4>
                                </Link>
                            </li>
                            <li>
                                {
                                    userInfo ?
                                        <Link to="/profile">
                                            <h4>Profile</h4>
                                        </Link>
                                        :
                                        <Link to="login" className={classes.listItem}>
                                            <Button variant="contained" color="primary">Login</Button>
                                        </Link>
                                }
                            </li>
                        </ul>
                    </div>
                }
            </div>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.logo}>
                        <Link to="/" className={classes.link}>
                            <h1>KART</h1>
                        </Link>
                    </div>
                    <div className={classes.categories}>
                        {
                            categoryList.map((category,index) => (
                                <Link key={index} to={`/see-products?category=${category.value}`} className={classes.link} onClick={() => { redirectHandler(category.value) }} >
                                    <h4>{category.label}</h4>
                                </Link>
                            ))
                        }

                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.search}>
                        <SearchIcon fontSize="large" />
                        <input type="text" placeholder="Search"
                            value={search}
                            onChange={(e)=>{setSearch(e.target.value);searchHandler(e)}}
                        />
                    </div>

                    <div className={classes.icons}>
                        {
                            userInfo ?
                                <Link to="wishlist" className={classes.icon}>
                                    <FavoriteBorderIcon fontSize="large" />
                                </Link>
                                :
                                ""
                        }
                        <Link to="cart" className={classes.icon}>
                            <ShoppingCartIcon fontSize="large" />
                        </Link>
                        {
                            userInfo ?
                                <Link to="/profile" className={classes.icon}>
                                    <AccountCircleIcon fontSize="large" className={classes.icon} />
                                </Link>
                                :
                                <Link to="login" className={classes.icon}>
                                    <Button variant="contained" color="primary">Login</Button>
                                </Link>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar