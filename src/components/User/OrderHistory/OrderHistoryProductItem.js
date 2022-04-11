import React from 'react';
import { UilStar } from '@iconscout/react-unicons'

const OrderHistoryProductItem = ({ item }) => {
    return (
        <div className="cursor-pointer flex border-solid border-b border-gray-300">
            <div className={`basis-10 shrink-0`}>
                <div style={{ backgroundImage: `url(${item.image[0]})` }} className="pt-[100%] bg-center bg-no-repeat bg-contain"></div>
            </div>
            <div className="grow ml-3 max-w-lg">
                <h3 className="text-sm font-normal text-ellipsis line-clamp-2">{item.name}</h3>
                <div className="flex">
                    {[...Array(item.vote).keys()].map(index => <UilStar key={index} size="14" color="#f6c327" />)}
                </div>
                <span>&times;{item.quantity}</span>
            </div>
            <div className="ml-3">
                <span className="font-medium text-base">${item.price.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default OrderHistoryProductItem;
