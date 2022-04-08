import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../context/auth/authContext';
import { updateProfile } from "firebase/auth";

import Header from '../components/Header';
import User from '../components/User/User';
import Footer from '../components/Footer';
import OrderHistory from '../components/User/OrderHistory';
import Profile from '../components/User/Profile';
import ChangePassword from '../components/User/ChangePassword';

const UserPage = () => {
    return (
        <div className="">
            <Header />
            <div className="max-w-5xl mx-auto mt-32 flex">
                <User />
                <Route path="/user/profile" component={Profile} />
                <Route path="/user/order" component={OrderHistory} />
                <Route path="/user/changepassword" component={ChangePassword} />
            </div>
            <Footer />
        </div>
    );
}

export default UserPage;
