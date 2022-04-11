import React from 'react';
import { useSelector } from 'react-redux';
import FadeInAnimate from '../UI/FadeInAnimate';

import CartList from './CartList';
import CartTotal from './CartTotal';


const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    const isEmpty = cart.length === 0
    const totalPrice = cart.reduce((preTotal, item) => preTotal + item.price*item.quantity, 0)
    const totalQuantity = cart.reduce((preTotal, item) => preTotal + item.quantity, 0)

    return (
        <FadeInAnimate from="left" className="w-full max-w-[1200px] mx-auto my-24 flex">
            <CartList cart={cart} isEmpty={isEmpty} totalPrice={totalPrice} totalQuantity={totalQuantity}/>
            {!isEmpty && <CartTotal totalPrice={totalPrice} totalQuantity={totalQuantity} />}
        </FadeInAnimate>
    );
}

export default Cart;
