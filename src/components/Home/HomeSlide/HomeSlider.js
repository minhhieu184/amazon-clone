import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import HomeSlideButton from './HomeSlideButton';

import "swiper/css";
import "swiper/css/navigation";


const HomeSlider = () => {

    return (
        <>
            <Swiper 
                modules={[Navigation]} 
                loop={true}
                className="relative"
            >
                <SwiperSlide>
                    <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="slider-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="slider-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="slider-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="slider-image" />
                </SwiperSlide>
                <HomeSlideButton nav="prev" size="50" color="#333" className="absolute h-56 w-20 top-0 left-0 z-10 flex justify-center items-center cursor-pointer" 
                    iconClassName="text-sm " />
                <HomeSlideButton nav="next" size="50" color="#333" className="absolute h-56 w-20 top-0 right-0 z-10 flex justify-center items-center cursor-pointer" 
                    iconClassName="text-sm " />
            </Swiper>

        </>
    );
}

export default HomeSlider;
