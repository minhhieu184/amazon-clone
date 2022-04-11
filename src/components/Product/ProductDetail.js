import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlide';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import HomeSlideButton from '../Home/HomeSlide/HomeSlideButton';
import { UilStar } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import FadeInAnimate from '../UI/FadeInAnimate';

import "swiper/css/pagination";
const ProductDetail = ({ product }) => {
    console.log("ProductDetail ~ product", product)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);

    const increaseHandler = () => {
        setQuantity(prev => +prev + 1)
    }

    const decreaseHandler = () => {
        setQuantity(prev => {
            if (+prev === 1) return 1
            return +prev - 1
        })
    }

    const addToCartHandler = () => {
        console.log(123);
        dispatch(cartActions.addItem({ product, quantity }))
    }

    return (
        <FadeInAnimate from="left" delayStart={0.5} className="mt-36 flex max-w-[1200px] mx-auto min-h-screen">
            {Object.keys(product).length !== 0 &&
                <>
                    <div className="w-1/2 rounded-xl bg-white product-detail-slider h-fit">
                        <Swiper
                            pagination={{
                                dynamicBullets: true
                            }}
                            loop={true}
                            modules={[Pagination]}
                        >
                            {product.image?.map((image, index) =>
                                <SwiperSlide className="px-10 py-8" key={index}>
                                    <div style={{ backgroundImage: `url(${image})` }} className="w-full pt-[100%] bg-contain bg-no-repeat bg-center"></div>
                                </SwiperSlide>)
                            }
                            <HomeSlideButton nav="prev" size="40" color="#6d6d6d" className="absolute top-1/2 -translate-y-1/2 left-0 z-10 flex justify-center items-center cursor-pointer"
                                iconClassName="text-sm " />
                            <HomeSlideButton nav="next" size="40" color="#6d6d6d" className="absolute top-1/2 -translate-y-1/2 right-0 z-10 flex justify-center items-center cursor-pointer"
                                iconClassName="text-sm " />
                        </Swiper>
                    </div>
                    <div className="grow rounded-xl bg-white ml-10 p-5">
                        <h2 className="text-2xl font-medium">{product.name}</h2>
                        <div className="flex mt-4">
                            {[...Array(product.vote).keys()].map(index => <UilStar key={index} size="14" color="#f6c327" />)}
                        </div>
                        <p className="text-sm text-gray-500 text-right">
                            Price:
                            <span className="text-[#B12704] text-lg font-medium"> ${product.price}</span>
                        </p>
                        <div className="text-right">
                            <div className="my-1 flex justify-end product-detail-quantity">
                                <button onClick={decreaseHandler} className="w-6 rounded-md bg-gray-300 flex justify-center items-center">-</button>
                                <input
                                    className="w-16 text-center border-solid border-[1px] mx-2 rounded-md outline-none focus:border-orange-300"
                                    type="number"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                    onBlur={e => {
                                        const value = e.target.value
                                        const isValid = value.match(/^[1-9][0-9]*$/)
                                        console.log("ProductDetail ~ isValid", isValid)
                                        if (isValid) {
                                            setQuantity(+value)
                                        } else setQuantity(1)
                                    }}
                                />
                                <button onClick={increaseHandler} className="w-6 rounded-md bg-gray-300 flex justify-center items-center">+</button>
                            </div>
                            <button
                                className="ml-auto flex text-sm font-semibold bg-orange-400 px-4 py-2 mt-4 rounded-lg text-white transition-all duration-100 ease-linear hover:opacity-90"
                                onClick={addToCartHandler}
                            >
                                <UilShoppingCart size="20" color="#ffd53c" />
                                Add to cart
                            </button>
                            <div className="text-left mt-8 border-t border-gray-200 py-4">
                                <h4 className="font-medium">About this item:</h4>
                                <ul className="list-disc pl-5 marker:text-base">
                                    {product.description.map((description, index) =>
                                        <li key={index} className="text-sm">
                                            {description}
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </>}
        </FadeInAnimate>
    );
}

export default ProductDetail;
