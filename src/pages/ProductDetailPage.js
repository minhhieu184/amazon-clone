import React, { useEffect, useState } from 'react';
import { useDatabase } from '../context/database/databaseContext';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductDetail from '../components/Product/ProductDetail';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
    const { id } = useParams()
    console.log("ProductDetailPage ~ id", id)
    const [product, setProduct] = useState({});
    const { getDocument, isLoading, error, isCompleted } = useDatabase()
    
    useEffect(() => {
        const getProduct = async () => {
            const productRes = await getDocument('products', id)
            productRes.price = +productRes.price
            productRes.vote = +productRes.vote
            setProduct({ id, ...productRes })
        }
        getProduct()
    }, [])

    return (
        <div className="bg-[#e8ecef] overflow-auto">
            <Header categoryNav />
            <ProductDetail product={product} />
            <Footer />
        </div>
    );
}

export default ProductDetailPage;
