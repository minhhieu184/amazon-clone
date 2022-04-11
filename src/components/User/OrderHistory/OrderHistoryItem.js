import React, { useState } from 'react';
import Modal from '../../UI/Modal';
import { AnimatePresence } from 'framer-motion';
import OrderHistoryProductItem from './OrderHistoryProductItem';

const OrderHistoryItem = ({ order, index, onRemove }) => {
    console.log("OrderHistoryItem ~ order", order)
    const [isShow, setIsShow] = useState(false);
    const totalPrice = order.items.reduce((prevTotal, item) => prevTotal + item.price * item.quantity, 0).toFixed(2);
    const date = new Date(order.infor.createdAt)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const minutes = date.getMinutes() + 1
    const hours = date.getHours() + 1

    const toggleHandler = () => {
        setIsShow(prev => !prev)
    }

    const formatTime = value => {
        return value < 10 ? `0${value}` : value
    }

    return (
        <>
            <li onClick={toggleHandler} className="flex justify-between p-3 border-solid border-t-[1px] border-gray-300 cursor-pointer transition-all duration-75 ease-linear hover:bg-gray-100">
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

            <AnimatePresence>
                {isShow &&
                    <Modal isShow={isShow} toggleHandler={toggleHandler}>
                        <div className="bg-white w-[800px] h-[500px] p-6 rounded-lg flex">
                            <div className="flex flex-col w-1/2 mr-3">
                                <ul className="grow overflow-y-auto pr-3">
                                    {order.items.map(item => <OrderHistoryProductItem key={item.id} item={item} />)}
                                </ul>
                                <p className="text-sm mt-3 mb-1 ml-auto mr-6">
                                    Total:
                                    <span className="text-base font-semibold"> ${totalPrice}</span>
                                </p>
                            </div>
                            <div className="grow">
                                <h3 className="text-xl font-semibold">Order detail</h3>
                                <div className="text-xs mt-4">
                                    <div>
                                        <span className="w-32 inline-block">Name:</span>
                                        <span className="text-base font-medium">{order.infor.name}</span></div>
                                    <div>
                                        <span className="w-32 inline-block">Phone:</span>
                                        <span className="text-base font-medium">{order.infor.phone}</span></div>
                                    <div>
                                        <span className="w-32 inline-block">Shipping address:</span>
                                        <span className="text-base font-medium">{order.infor.address}</span></div>
                                    <div>
                                        <span className="w-32 inline-block">Created At:</span>
                                        <span className="text-base font-medium">{`${formatTime(hours)}:${formatTime(minutes)} - ${formatTime(day)}/${formatTime(month)}/${year}`}</span>
                                    </div>
                                </div>
                                <button onClick={() => onRemove(index)} className="ml-auto block mt-4 text-orange-600 font-medium px-3 py-1 rounded-lg transition-all duration-100 ease-linear hover:bg-orange-600 hover:text-white">Delete</button>
                            </div>
                        </div>
                    </Modal>
                }
            </AnimatePresence>
        </>
    );
}

export default OrderHistoryItem;
