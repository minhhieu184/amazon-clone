import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlide';
import { motion } from 'framer-motion';

import { UilStar } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const cartItemVariants = {
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        x: "-100vw",
    }
}

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const increaseItemHandler = () => {
        dispatch(cartActions.increaseItem(item.id))
    }
    const decreaseItemHandler = () => {
        dispatch(cartActions.decreaseItem(item.id))
    }
    const removeItemHandler = () => {
        dispatch(cartActions.removeItem(item.id))
    }

    return (
        <motion.div
            key={item.id}
            variants={cartItemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Link to={`/product/${item.id}`} className="cursor-pointer py-3 pl-8 flex border-solid border-t-[1px] border-gray-300">
                <div className={`basis-44 shrink-0`}>
                    <div style={{ backgroundImage: `url(${item.image[0]})` }} className="pt-[100%] bg-center bg-no-repeat bg-contain"></div>
                </div>
                <div className="grow ml-3 max-w-lg">
                    <h3 className="text-lg font-medium text-ellipsis line-clamp-2">{item.name}</h3>
                    <span className="text-[#007600] text-xs block mb-1">In Stock</span>
                    <div className="flex">
                        {[...Array(item.vote).keys()].map(index => <UilStar key={index} size="14" color="#f6c327" />)}
                    </div>
                    <div onClick={e => e.preventDefault()} className="flex mt-4 items-center">
                        <button onClick={decreaseItemHandler} className="w-6 h-6 flex justify-center items-center bg-gray-300 rounded-md hover:opacity-80 transi transition-all duration-200 ease-linear">-</button>
                        <span className="font-semibold mx-3 block w-5 text-center">{item.quantity}</span>
                        <button onClick={increaseItemHandler} className="w-6 h-6 flex justify-center items-center bg-gray-300 rounded-md hover:opacity-80 transi transition-all duration-200 ease-linear">+</button>
                        <button onClick={removeItemHandler} className="ml-6 text-xs text-[#007600] hover:underline">Delete</button>
                    </div>
                </div>
                <div className="ml-auto">
                    <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
                </div></Link>
        </motion.div>
    );
}

export default CartItem;
