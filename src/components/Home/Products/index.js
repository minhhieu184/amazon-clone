import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useDatabase } from '../../../context/database/databaseContext';
import ModalLoadingSpinner from '../../UI/ModalLoadingSpinner';
import { motion } from 'framer-motion';

const categoryImgs = [
    { name: 'Electronics', path: '/electronics',img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg' },
    { name: 'Video Games', path: '/home-kitchen',img: 'https://m.media-amazon.com/images/I/51HtGdcuYjL._AC_SY460_.jpg' },
    { name: 'Home & Kitchen', path: '/video-game',img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg' }
]

const Products = () => {
    const [products, setProducts] = useState([]);
    const { getDocsLimit, isLoading, isCompleted, resetState } = useDatabase()

    const row1 = products.slice(0, 3)
    const row2 = products.slice(3, 7)
    const row3 = products.slice(7, 9)

    useEffect(() => {
        resetState()
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            const productsRes = await getDocsLimit('products', 9)
            productsRes.forEach(product => {
                product.vote = +product.vote
                product.price = +product.price
            })
            setProducts(productsRes)
        }
        getProducts()
    }, [])

    return (
        <>
            <motion.div 
                className="grid gap-2 grid-cols-2 md:md-home-product"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className=" md:col-span-4 md:grid md:gap-4 md:grid-cols-3 md:gap-y-12">
                    {categoryImgs.map(category =>
                        <Link to={`/category${category.path}`} className="relative cursor-pointer block rounded-xl overflow-hidden">
                            <h2 style={{ textShadow: "0 0 2px #fff" }} className="absolute z-10 text-xl text-zinc-900 font-bold px-2">{category.name}</h2>
                            <div style={{ backgroundImage: `url(${category.img})` }}
                                className={`w-full pt-60 bg-center bg-no-repeat bg-cover transition-all duration-150 ease-linear hover:scale-110`}></div>
                        </Link>
                    )}
                    {row1.map(product => <Product product={product} />)}
                </div>
                {row2.map(product => <Product product={product} />)}
                <div className=" md:col-span-4 md:grid md:gap-4 md:grid-cols-2">
                    {row3.map(product => <Product product={product} />)}
                </div>
            </motion.div>
            {isLoading && <ModalLoadingSpinner className="w-16 h-16 mx-auto mt-40" />}
            {isCompleted && products.length === 0 &&
                <div className="mt-72 text-center text-3xl font-medium">
                    Cannot find any products
                </div>
            }
        </>
    );
}

export default Products;
