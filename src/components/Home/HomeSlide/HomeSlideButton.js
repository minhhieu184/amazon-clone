import React from 'react';
import { useSwiper } from 'swiper/react';
import { UilAngleLeftB } from '@iconscout/react-unicons'
import { UilAngleRightB } from '@iconscout/react-unicons'

const HomeSlideButton = ({ nav, className, size, color }) => {
    const swiper = useSwiper()

    const navHandler = () => {
        if (nav === 'prev') swiper.slidePrev()
        if (nav === 'next') swiper.slideNext()
    }

    return (
        <div className={className} onClick={navHandler}>
            {nav === 'prev' && <UilAngleLeftB size={size} color={color} />}
            {nav === 'next' && <UilAngleRightB size={size} color={color} />}
        </div>
    );
}

export default HomeSlideButton;
