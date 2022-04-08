import React, { useEffect, useState } from 'react';
import { where } from 'firebase/firestore';
import { useDatabase } from '../context/database/databaseContext';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import ProductList from '../components/Product/ProductList';
import Footer from '../components/Footer';
import ModalLoadingSpinner from './../components/UI/ModalLoadingSpinner';

const CategoryPage = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([]);
    console.log("CategoryPage ~ products", products)
    const { getQueryDocs, getAllDocs, isLoading, error } = useDatabase()

    useEffect(() => {
        if (category === 'all') {
            const getProducts = async () => {
                const productsRes = await getAllDocs('products')
                productsRes.forEach(product => {
                    product.price = +product.price
                    product.vote = +product.vote
                })
                setProducts(productsRes)
            }
            getProducts()
        } else {
            let rule = where('category', '==', category)
            const getProducts = async () => {
                const productsRes = await getQueryDocs('products', rule)
                productsRes.forEach(product => {
                    product.price = +product.price
                    product.vote = +product.vote
                })
                setProducts(productsRes)
            }
            getProducts()
        }
    }, [category])

    return (
        <div className="bg-[#e8ecef] overflow-auto min-h-[100vh]">
            <Header categoryNav />
            <ProductList products={products} />
            <Footer />
            {isLoading && <ModalLoadingSpinner />}
        </div>
    );
}

export default CategoryPage;
