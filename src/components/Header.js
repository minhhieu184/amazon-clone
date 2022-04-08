import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/auth/authContext';

import { UilSearch } from '@iconscout/react-unicons'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'

import CategoryNav from './CategoryNav';

const Header = ({ categoryNav }) => {
    const { currentUser, profile, logout } = useAuth()
    const [animate, setAnimate] = useState(true);
    const cart = useSelector(state => state.cart.items)
    const totalQuantity = cart.reduce((preTotal, item) => preTotal + item.quantity, 0)

    useEffect(() => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 300)
    }, [cart])

    return (
        <header className="bg-[#131921] flex justify-center items-center h-[60px] p-[10px] text-white fixed top-0 left-0 right-0 z-50">
            <div className="px-2 cursor-pointer">
                <Link to='/'>
                    <img className="w-[100px] pt-2" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
                </Link>
            </div>
            <div className="grow flex px-4 cursor-pointer">
                <input type="text" className="grow h-[38px] pt-2 px-[10px] pb-[10px] border-none outline-orange-300 rounded-l-md" />
                <div className="bg-orange-300 w-11 rounded-r-md flex justify-center items-center">
                    <UilSearch size="24" color="#000" />
                </div>
            </div>
            {!currentUser &&
                <Link to='/auth' className="header-nav">
                    <span className="text-xs ">Hello, Sign in</span>
                    <span className="text-sm font-semibold">Account &amp; Lists</span>
                </Link>}
            {currentUser &&
                <div className="relative py-1 hover:show-nav">
                    <Link to='/user/profile' className="header-nav">
                        <span className="text-xs mx-auto">Hello,</span>
                        <span className="text-xs font-semibold">{profile.name}</span>
                    </Link>
                    <ul className="user-nav">
                        <Link to='/user/profile' className="header-user-subnav-item">Manage Acount</Link>
                        <Link to='/user/order' className="header-user-subnav-item">Your order</Link>
                        <Link to='/user/chengepassword' className="header-user-subnav-item">Change password</Link>
                        <button onClick={logout} className="header-user-subnav-item text-left">Log out</button>
                    </ul>
                </div>}
            <Link to='/user/order' className="header-nav">
                <span className="text-xs ">Returns</span>
                <span className="text-sm font-semibold">&amp; Order</span>
            </Link>
            <Link to='/cart' className={`header-nav flex-row ${animate && 'animate-[popup_0.3s_ease-in]'}`}>
                <div className="relative">
                    <span className="absolute text-orange-500 font-semibold top-[-14px] left-1/2 -translate-x-1/2">{totalQuantity}</span>
                    <UilShoppingCartAlt size="30" color="#fff" />
                </div>
                <span className="pt-3 text-sm font-semibold">Cart</span>
            </Link>
            {categoryNav && <CategoryNav />}
        </header>


    );
}

export default Header;
