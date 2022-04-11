import React from 'react';
import { Link } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import CartItem from './CartItem';

const CartList = ({ cart, isEmpty, totalQuantity, totalPrice }) => {

    return (
        <div className="bg-white mr-5 grow rounded-xl">
            <div className="px-5 ">
                <div className="mt-6">
                    <h1 className="text-3xl font-medium">{isEmpty && 'Your Amazon Cart is empty.' || 'Shopping Cart'}</h1>
                    {!isEmpty &&
                        <>
                            <span className="text-xs font-medium text-[#007085] hover:underline cursor-pointer py-[2px]">Delete all items</span>
                            <p className="text-right text-xs text-gray-700 font-medium">Price</p>
                        </>}
                    {isEmpty &&
                        <>
                            <p className="text-[13px] mt-3 mb-8">Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                                <br />
                                Continue shopping on the
                                <Link to='/' className="text-[#007085] hover:underline"> Amazon.com homepage</Link>
                            </p>
                        </>
                    }
                </div>
                <AnimatePresence>
                    {cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />)}
                </AnimatePresence>
                {!isEmpty &&
                    <div className="border-solid border-t-[1px] border-gray-300">
                        <p className="mt-3 mb-12 text-right">Total ({totalQuantity} items):
                            <span className="font-semibold text-lg"> ${totalPrice.toFixed(2)}</span>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}

export default CartList;
