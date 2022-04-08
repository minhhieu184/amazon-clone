import React from 'react';

const LoadingSpinner = ({ className }) => {
    return (
        <div className={`${className} animate-spin border-solid border-4 border-y-orange-400 border-x-transparent rounded-full`}>
            
        </div>
    );
}

export default LoadingSpinner;
