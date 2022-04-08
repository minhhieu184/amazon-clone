import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNav = () => {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const wheelHandler = e => {
            setShowNav(e.deltaY < 0)
        }
        window.addEventListener('wheel', wheelHandler)

        return () => {
            window.removeEventListener('wheel', wheelHandler)
        }
    }, [])

    return (
        <div className={`absolute left-0 right-0 top-[60px] z-30 flex justify-start items-center h-10 px-4 bg-[#232f3e] transition-all duration-150 ease-linear 
            ${!showNav && 'h-0 overflow-hidden'}`}>
            <NavLink className="categoty-link" activeClassName="text-orange-500" to="/category/all">All</NavLink>
            <NavLink className="categoty-link" activeClassName="text-orange-500" to="/category/electronics">Electronics</NavLink>
            <NavLink className="categoty-link" activeClassName="text-orange-500" to="/category/home-kitchen">Home &amp; Kitchen</NavLink>
            <NavLink className="categoty-link" activeClassName="text-orange-500" to="/category/video-game">Video Games</NavLink>
        </div>
    );
}

export default CategoryNav;
