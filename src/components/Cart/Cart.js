import React from 'react';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { useSelector } from 'react-redux';


const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    const isEmpty = cart.length === 0
    const totalPrice = cart.reduce((preTotal, item) => preTotal + item.price*item.quantity, 0)
    const totalQuantity = cart.reduce((preTotal, item) => preTotal + item.quantity, 0)

    return (
        <section className="w-full max-w-[1200px] mx-auto my-24 flex">
            <CartList cart={cart} isEmpty={isEmpty} totalPrice={totalPrice} totalQuantity={totalQuantity}/>
            {!isEmpty && <CartTotal totalPrice={totalPrice} totalQuantity={totalQuantity} />}
        </section>
    );
}

export default Cart;
