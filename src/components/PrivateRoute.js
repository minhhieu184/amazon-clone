import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth/authContext';

const PrivateRoute = ({ enable, to, component: Component, ...props }) => {

    const { isChecking } = useAuth()
    return (
        <Route 
            {...props}
            render = {props => !isChecking && (enable ? <Component {...props} /> : <Redirect to={to || '/'} />)}
        />
    );
}

export default PrivateRoute;
