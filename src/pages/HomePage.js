import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home/Home';
import Footer from '../components/Footer';

const HomePage = () => {

    return (
        <div className="bg-[#e8ecef] overflow-auto min-h-[100vh]">
            <Header categoryNav />
            <Home />
            <Footer />
        </div>
    );
}

export default HomePage;
