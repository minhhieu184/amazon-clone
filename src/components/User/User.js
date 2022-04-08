import React from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {
    return (
        <div className="max-w-xs w-1/3 h-fit p-5 border-solid border-[1px] border-gray-300 rounded-lg">
            <h1 className="text-2xl font-semibold my-3">Manage your Account</h1>
            <p className="text-xs my-3">Amazon programs may use these profiles to provide a personalized experience.</p>
            <NavLink className="text-sm py-4 px-2 my-1 block rounded-lg transition-all duration-75 ease-linear hover:bg-orange-200" to="/user/profile" activeClassName="bg-orange-400 font-medium hover:bg-orange-400">Profile</NavLink>
            <NavLink className="text-sm py-4 px-2 my-1 block rounded-lg transition-all duration-75 ease-linear hover:bg-orange-200" to="/user/order" activeClassName="bg-orange-400 font-medium hover:bg-orange-400">Order History</NavLink>
            <NavLink className="text-sm py-4 px-2 my-1 block rounded-lg transition-all duration-75 ease-linear hover:bg-orange-200" to="/user/changepassword" activeClassName="bg-orange-400 font-medium hover:bg-orange-400">Change Password</NavLink>
        </div>
    );
}

export default User;
