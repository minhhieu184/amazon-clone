import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDatabase } from '../../../context/database/databaseContext';
import LoadingSpinner from '../../UI/LoadingSpinner';

const products = [
    {
        id: 'p1',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p2',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p3',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p4',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p5',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p6',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p7',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
    {
        id: 'p8',
        name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 19.99999,
        vote: 4,
        image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg',
    },
]

const Products = () => {
    const [products, setProducts] = useState([]);
    const { getDocsLimit, isLoading, isCompleted, resetState } = useDatabase()

    useEffect(() => {
        resetState()
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            const productsRes = await getDocsLimit('products', 8)
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
        <div className="grid gap-2 grid-cols-2 md:md-home-product">
            <div className=" md:col-span-4 md:grid md:gap-4 md:grid-cols-3">
                <Product product={products[0]} />
                <Product product={products[1]} />
                <Product product={products[2]} />
            </div>
            <Product product={products[3]} />
            <Product product={products[4]} />
            <Product product={products[5]} />
            <Product product={products[6]} />
            <Product product={products[7]} className="col-span-full" />
        </div>
        {isLoading && <LoadingSpinner className="w-16 h-16 mx-auto mt-40" />}
        {isCompleted && products.length === 0 && 
            <div className="mt-72 text-center text-3xl font-medium">
                Cannot find any products
            </div>
        }
        </>
    );
}

export default Products;
