import React from 'react';
import FadeInAnimate from '../UI/FadeInAnimate';
import HomeSlider from './HomeSlide/HomeSlider';
import Products from './Products';

const Home = () => {
    return (
        <FadeInAnimate key="home" from="left" className="mt-[100px]">
            <HomeSlider />
            <section className="w-full max-w-[1200px] mx-auto z-20 relative mt-[-6rem] md:mt-[-18rem]">
                <Products />
            </section>
        </FadeInAnimate>
    );
}

export default Home;
