import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer';

const CartPage = () => {
    return (
        <div className="bg-[#e8ecef] overflow-auto min-h-[100vh]">
            <Header />
            <Cart />
            <Footer />
        </div>
    );
}

export default CartPage;
