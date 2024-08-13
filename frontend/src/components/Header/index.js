import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import cartItem from '../Assets/cart_icon.png'
import './index.css'

const Header = () => {
    const [menu,setMenu] = useState('shop')
    return(
        <nav className = "nav-container">
            <Link to="/" className='nav-link'>
                <div className = "nav-logo-container">
                    <img src = {logo} alt="nav logo" className='logo' />
                    <p>FULLSHOP</p>
                </div>
            </Link>
            <ul className='nav-menu-container'>
                <li onClick={() => {setMenu('shop')}}><Link to="/" className='nav-link'>Shop</Link>{menu === 'shop' ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('mens')}}><Link to="/mens" className='nav-link'>Men</Link>{menu === 'mens' ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('womens')}}><Link to="/womens" className='nav-link'>Women</Link>{menu === 'womens' ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('kids')}}><Link to="/kids" className='nav-link'>Kids</Link>{menu === 'kids' ? <hr/> : <></>}</li>
            </ul>
            <div className='login-button-cart-icon-container'>
                <Link to = "/login"><button className='login-button'>Login</button></Link>
                <Link to = "/cart"><img src={cartItem} alt='cart icon' className='cart-icon' /></Link>
                <div className='cart-count-container'>
                    0
                </div>
            </div>
        </nav>
    )
}

export default Header