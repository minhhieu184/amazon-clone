import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

const CartTotal = ({ totalPrice, totalQuantity }) => {
    const history = useHistory()
    const { currentUser } = useAuth()

    const navigateHandler = () => {
        currentUser && history.push('/checkout')
        !currentUser && history.push('/auth')
    }

    return (
        <div className="bg-white min-w-[300px] rounded-2xl p-5 h-fit">
            <div>
                <p>
                    Subtotal ({totalQuantity} items):
                    <span className="font-semibold text-lg"> ${totalPrice.toFixed(2)}</span>
                </p>
                <input type="checkbox" id="gift"/>
                <label htmlFor="gift" className="ml-1 text-sm">This order contains a gift</label>
            </div>
            <button onClick={navigateHandler} className="bg-[#f7ca00] rounded-lg text-[13px] w-full py-[5px] mt-5">Proceed to checkout</button>
        </div>
    );
}

export default CartTotal;
