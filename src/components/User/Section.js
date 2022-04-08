import React from 'react';

const Section = ({ title, children }) => {
    return (
        <div className="max-w-4xl w-2/3 mx-5 p-5 border-solid border-[1px] border-gray-300 rounded-lg">
            <h1 className="text-2xl font-semibold my-3">{title}</h1>
            
            {children}
        </div>
    );
}

export default Section;
