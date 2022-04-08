import React from 'react';
import { UilStar } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    console.log("ProductItem ~ product", product)
    return (
        <Link to={'/product/'+product.id} className="cursor-pointer p-4 bg-white block shadow-lg rounded-lg">
            <div style={{ backgroundImage: `url(${product.image})` }} className={`w-full pt-44 bg-center bg-no-repeat bg-contain transition-all duration-150 ease-linear hover:scale-110`}></div>
            <div className="mt-3">
                <p className="text-sm text-ellipsis line-clamp-2 font-medium">{product.name}</p>
                <div className="flex">
                    {[...Array(product.vote).keys()].map(index => <UilStar key={index} size="14" color="#e67a00" />)}
                </div>
                <p className="font-medium">${product.price}</p>
            </div>
        </Link>
    );
}

export default ProductItem;
