import React from 'react';
import HomeSlider from './HomeSlide/HomeSlider';
import Products from './Products';


const Home = () => {
    return (
        <div className="mt-[100px]">
            <HomeSlider />
            <section className="w-full max-w-[1200px] mx-auto z-20 relative mt-[-6rem] md:mt-[-18rem]">
                <Products />
            </section>
        </div>
    );
}

export default Home;
