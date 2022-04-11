import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/auth/authContext';
import { useDatabase } from '../../../context/database/databaseContext';
import FadeInAnimate from '../../UI/FadeInAnimate';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import OrderHistoryItem from './OrderHistoryItem';
import ModalLoadingSpinner from '../../UI/ModalLoadingSpinner';

const OrderHistory = () => {
    const history = useHistory()
    const location = useLocation()
    const { getDocument, updateDocument, isLoading, error, resetState } = useDatabase()
    console.log("OrderHistory ~ error", error)
    const { profile } = useAuth()
    const [orders, setOrders] = useState([]);
    const [isInit, setIsInit] = useState(true);

    const queryParams = new URLSearchParams(location.search)
    const filterMethod = queryParams.get('filter')
    console.log("OrderHistory ~ fliterMethod", filterMethod)
    const orderFilted = [...orders]
    switch (filterMethod) {
        case "oldest":
            orderFilted.sort((a, b) => a.infor.createdAt - b.infor.createdAt)
            console.log("OrderHistory ~ orderFilted", orderFilted)
            break;

        default:
            orderFilted.sort((a, b) => b.infor.createdAt - a.infor.createdAt)
            console.log("OrderHistory ~ orderFilted", orderFilted)
            break;
    }

    const removeHandler = (index) => {
    console.log("removeHandler ~ index", index)
        const newOrders = [...orderFilted]
        newOrders.splice(index, 1)
        console.log("removeHandler ~ newOrders", newOrders)
        setOrders(newOrders)
    }

    const changeFilterHandler = e => {
        history.push({
            pathname: location.pathname,
            search: `?filter=${e.target.value}`
        })
    }

    useEffect(() => {
        resetState()
    }, [])

    useEffect(() => {
        const getOrders = async () => {
            if (profile.uid) {
                const ordersRes = await getDocument('orders', profile.uid)
                setOrders(ordersRes?.orderList || [])
            }
        }
        getOrders()
        setIsInit(false)
    }, [profile])

    useEffect(() => {
        !isInit && profile.uid && updateDocument('orders', profile.uid, {
            orderList: orders
        })
    }, [orders])

    return (
        <>
            <FadeInAnimate key="orderHistory" from="right" className="max-w-4xl w-2/3 mx-5 p-5 border-solid border-[1px] border-gray-300 rounded-lg">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold my-3">Order History</h1>
                    <select className="text-sm" value={filterMethod} onChange={changeFilterHandler}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
                {error && <p className="text-sm text-red-500 font-semibold mb-2">Cannot find order history. Try again!</p>}
                    <FadeInAnimate from="right" delayStart={1}>
                    {orderFilted.map((order, index) => <OrderHistoryItem key={index} index={index} order={order} onRemove={removeHandler} />)}
                    {orders.length === 0 &&
                        <div className="flex text-xs mt-3">
                            <p>You have not placed any orders.</p>
                            <Link className="mx-1 text-orange-400 hover:underline" to="/cart">Go to order</Link>
                        </div>
                    }
                    </FadeInAnimate>
            </FadeInAnimate>
            {isLoading && <ModalLoadingSpinner />}
        </>
    );
}

export default OrderHistory;
