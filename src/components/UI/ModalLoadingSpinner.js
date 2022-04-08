import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const ModalLoadingSpinner = () => {
    return (
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-[#64646440] flex justify-center items-center">
            <LoadingSpinner className="w-12 h-12" />
        </div>
    );
}

export default ModalLoadingSpinner;
