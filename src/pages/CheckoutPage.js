import React from 'react';
import CheckoutHeader from '../components/Checkout/CheckoutHeader';
import Checkout from '../components/Checkout/Checkout';
import CheckoutFooter from '../components/Checkout/CheckoutFooter';
import FadeInAnimate from '../components/UI/FadeInAnimate';

const CheckoutPage = () => {
    return (
        <>
            <CheckoutHeader />
            <FadeInAnimate from="left">
                <Checkout />
                <CheckoutFooter />
            </FadeInAnimate>
        </>
    );
}

export default CheckoutPage;
