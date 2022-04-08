import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
console.log("ProductList ~ products", products)
console.log("ProductList ~ products", products)
    const location = useLocation()
    const search = location.search
    const params = new URLSearchParams(search)
    const sort = params.get('sort')
    switch (sort) {
        case 'asd':
            products.sort((a, b) => a.price - b.price)
            break;
        case 'desc':
            products.sort((a, b) => b.price - a.price)
            break;
    
        default:
            break;
    }
    
    return (
        <div className="mt-36 max-w-[1200px] mx-auto flex items-start">
            <div className="shrink-0 basis-64 bg-white rounded-lg p-4 flex flex-col justify-center items-start">
                <h3 className="text-3xl font-semibold pb-6">Sort by</h3>
                <Link className={`productlist-sort ${sort === 'asd' && 'productlist-sort--active'}`} to={`${location.pathname}?sort=asd`}>Price: Low to High</Link>
                <Link className={`productlist-sort ${sort === 'desc' && 'productlist-sort--active'}`} to={`${location.pathname}?sort=desc`}>Price: High to Low</Link>
            </div>
            <div className="ml-4 grow grid gap-4 grid-cols-3">
                {products.map((product => <ProductItem key={product.id} product={product} />))}
            </div>
        </div>
    );
}

export default ProductList;
