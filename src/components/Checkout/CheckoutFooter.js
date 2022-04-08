import React from 'react';

const CheckoutFooter = () => {
    return (
        <div className="bg-gray-100 text-gray-400 py-8">
            <div className="flex justify-center text-xs">
                <a className="mx-2 hover:underline" href="/">Conditions of Use</a>
                <a className="mx-2 hover:underline" href="/">Privacy Notice</a>
                <a className="mx-2 hover:underline" href="/">Interest-Based Ads</a>
                <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    );
}

export default CheckoutFooter;
