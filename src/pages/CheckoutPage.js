import React from 'react';
import CheckoutHeader from '../components/Checkout/CheckoutHeader';
import Checkout from '../components/Checkout/Checkout';
import CheckoutFooter from '../components/Checkout/CheckoutFooter';

const CheckoutPage = () => {
    return (
        <>
            <CheckoutHeader />
            <Checkout />
            <CheckoutFooter />
        </>
    );
}

export default CheckoutPage;
