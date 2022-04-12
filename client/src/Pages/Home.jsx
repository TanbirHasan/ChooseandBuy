import React from 'react';
import Annoucement from '../components/Annoucement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div className='container'>
            <Annoucement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            
        </div>
    );
};

export default Home;