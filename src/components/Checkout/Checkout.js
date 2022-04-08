import React from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutItems from './CheckoutList';

const Checkout = () => {
    return (
        <div className="mt-28 mb-16 min-h-[30rem] max-w-[1200px] mx-auto">
            <div className="grid grid-cols-5 gap-16">
                <CheckoutForm />
                <CheckoutItems />
            </div>
        </div>
    );
}

export default Checkout;
