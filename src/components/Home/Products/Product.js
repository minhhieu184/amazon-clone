import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlide';

import { UilStar } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const Product = ({ className, product }) => {
    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(cartActions.addItem({ product: product, quantity: 1 }))
    }

    return (
        <>
            {product &&
                <div className={`${className} bg-white p-4 text-xs cursor-pointer rounded-xl`}>
                    <Link to={`/product/${product.id}`} className="block">
                        <p className="text-ellipsis line-clamp-2">{product.name}</p>
                        <span className="font-semibold my-1 block">{product.price.toFixed(2)}</span>
                        <div className="flex">
                            {[...Array(product.vote).keys()].map(index => <UilStar key={index} size="10" color="#f6c327" />)}
                        </div>
                        <div style={{ backgroundImage: `url(${product.image})` }} className={`w-full pt-64 bg-center bg-no-repeat bg-contain mt-2`}></div>
                    </Link>
                    <div className="text-center mt-3">
                        <button onClick={addItemHandler} className="text-center bg-[#e7c968] px-2 py-[2px] transition-all duration-150 ease-linear hover:opacity-80">Add to basket</button>
                    </div>
                </div>}
        </>
    );
}

export default Product;
