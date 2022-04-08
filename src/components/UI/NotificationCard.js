import React from 'react';
import { UilCheck } from '@iconscout/react-unicons'

const NotificationCard = ({ type, message }) => {
    return (
        <div className="bg-white p-10 rounded-xl shadow-md max-w-md">
            <div className="rounded-full h-52 w-52 bg-[#9ABC66] mx-auto mb-9 flex justify-center items-center">
                <UilCheck size="200" color="#fff" /> 
            </div>
            <h1 className="text-[#88B04B] text-5xl font-bold mb-4 text-center">Success</h1>
            <p className="text-xl">{message}</p>
        </div>
    );
}

export default NotificationCard;
