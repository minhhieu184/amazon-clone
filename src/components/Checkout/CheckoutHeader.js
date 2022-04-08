import React from 'react';
import { useHistory } from 'react-router-dom';

const CheckoutHeader = () => {
    const history = useHistory()
    
    return (
        <div className="fixed top-0 right-0 left-0 bg-white shadow-md">
            <img className="w-40 px-6 mx-auto cursor-pointer" onClick={() => history.push('/')} src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-amazon-inkythuatso-2-01-29-14-26-30.jpg" alt="amazon-logo" />
        </div>
    );
}

export default CheckoutHeader;
