import React from 'react';

import { UilStar } from '@iconscout/react-unicons'


const CheckoutItem = ({ value }) => {
    return (
        <div className="cursor-pointer px-8 py-4 flex border-solid border-b-[1px] border-gray-300">
            <div className={`basis-44 shrink-0`}>
                <div style={{ backgroundImage: `url(${value.image[0]})` }} className="pt-[100%] bg-center bg-no-repeat bg-contain"></div>
            </div>
            <div className="grow ml-3 max-w-lg">
                <h3 className="text-base font-medium text-ellipsis line-clamp-2">{value.name}</h3>
                <span className="text-[#007600] text-xs block mb-1">In Stock</span>
                <div className="flex">
                    {[...Array(value.vote).keys()].map(index => <UilStar key={index} size="14" color="#f6c327" />)}
                </div>
                <span className="text-sm my-2 block font-medium">Quantity: {value.quantity}</span>

            </div>
            <div className="ml-4">
                <span className="font-semibold text-lg">${value.price.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default CheckoutItem;
