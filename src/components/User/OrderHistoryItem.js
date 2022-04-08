import React from 'react';

const OrderHistoryItem = ({ order, index, onRemove }) => {
    const totalPrice = order.items.reduce((prevTotal, item) => prevTotal + item.price*item.quantity, 0).toFixed(2);
    const date = new Date(order.infor.createdAt)
    console.log("OrderHistoryItem ~ date", date)
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    return (
        <li className="flex justify-between py-3 border-solid border-t-[1px] border-gray-300">
            <div className="mr-6 max-w-[75%]">
                {order.items.map((item, index) => 
                    <div key={index} className="flex justify-between">
                        <p className="text-sm leading-6 text-ellipsis line-clamp-1">{item.name}</p>
                        <span className="ml-4">&times;{item.quantity}</span>
                    </div>  
                )}
                <p className="text-sm mt-3 mb-1">
                    Total:
                    <span className="text-base font-semibold"> ${totalPrice}</span>
                </p>
            </div>
            <div className="grow text-right flex flex-col justify-between items-end">
                <p className="text-sm font-semibold">{day}/{month}/{year}</p>
                <button onClick={() => onRemove(index)} className="text-sm font-semibold text-orange-500 px-2 py-1 rounded-lg transition-all duration-100 ease-linear hover:bg-orange-500 hover:text-white ">Delete</button>
            </div>
        </li>
    );
}

export default OrderHistoryItem;
