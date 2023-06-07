import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Home from './pages/Home/Home'
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import UserProfile from "./pages/UserProfile/UserProfile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Wishlist from "./pages/Wishlist/Wishlist";
import OrderPage from "./pages/OrderPage/OrderPage";
import Checkout from "./pages/Checkout/Checkout";
import ProductPage from './pages/ProductPage/ProductPage'
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import NotFound from './pages/NotFound/NotFound'
import GoToTop from "./components/GoToTop/GoToTop";
import AboutUs from './pages/AboutUs/AboutUs'
import StoreLocation from './pages/StoreLocation/StoreLocation'

const Router = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/profile" element={<UserProfile />} />
                    <Route exact path="/reset-password" element={<ResetPassword />} />
                    <Route exact path="/wishlist" element={<Wishlist />} />
                    <Route exact path="/orders" element={<OrderPage />} />
                    <Route exact path="/product/:id" element={<SingleProduct />} />
                    <Route exact path="/see-products" element={<ProductPage />} />
                    <Route exact path="/search" element={<SearchResultPage />} />
                    <Route exact path="/about-us" element={<AboutUs />} />
                    <Route exact path="/store-location" element={<StoreLocation />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <GoToTop/>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default Router