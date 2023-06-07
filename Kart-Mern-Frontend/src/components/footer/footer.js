import { Button } from '@mui/material';
import React from 'react'
import useStyles from "./styles";
import { Link } from 'react-router-dom';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.Subscribe}>
          <h3>Subscribe to our newsletter</h3>
          <p>Get the latest news and offers</p>
          <div className={classes.input}>
            <input type="text" placeholder="Enter your email address" />
            <Button variant="contained" color="primary">Subscribe</Button>
          </div>
        </div>
        <div className={classes.social}>
          <h3>Follow us</h3>
          <div className={classes.icons}>
            <Link to="#" target='_blank'><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" target='_blank'><i className="fab fa-twitter"></i></Link>
            <Link to="#" target='_blank'><i className="fab fa-instagram"></i></Link>
            <Link to="#" target='_blank'><i className="fab fa-youtube"></i></Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.links}>
        <div className={classes.link}>
          <h3>Women</h3>
          <ul>
            <li>
              <Link to="/search?q=dressess">Dresses</Link>
            </li>
            <li>
              <Link to="/search?q=tops">Tops</Link>
            </li>
            <li>
              <Link to="/search?q=Sweaters">Sweaters/Knits</Link>
            </li>
            <li>
              <Link to="/search?q=Jackets">Jackets/Coats</Link>
            </li>
          </ul>
        </div>
        <div className={classes.link}>
          <h3>Men</h3>
          <ul>
            <li>
              <Link to="/search?q=Tees">Tees/Tank tops</Link>
            </li>
            <li>
              <Link to="/search?q=Shirts">Shirts/Polos</Link>
            </li>
            <li>
              <Link to="/search?q=Sweaters">Sweaters</Link>
            </li>
            <li>
              <Link to="/search?q=Sweatshirts">Sweatshirts/Hoodies</Link>
            </li>
          </ul>
        </div>
        <div className={classes.link}>
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/store-location">Store Location</Link>
            </li>
            <li>
              <Link to="/orders">Orders Tracking</Link>
            </li>
          </ul>
        </div>
        <div className={classes.link}>
          <h3>Help</h3>
          <ul>
            <li>
              <Link to="/shipping">Shipping & Returns</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/t&C">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={classes.bottom}>
        <p className={classes.text}>© 2021 Ecommerce. All rights reserved</p>
        <div className={classes.cards}>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-paypal"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer