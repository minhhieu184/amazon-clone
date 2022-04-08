import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';

const CheckoutList = () => {
    const cart = useSelector(state => state.cart.items)
    const totalPrice = cart.reduce((preTotal, item) => preTotal + item.price*item.quantity, 0)


    return (
        <div className="col-span-3">
            {cart.map((item, index) => <CheckoutItem key={index} value={item} />)}
            <p className="text-2xl font-medium my-6 mx-4 text-right">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}

export default CheckoutList;
