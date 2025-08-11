import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <section className='banner'>
                <Banner></Banner>
            </section>
            <section>
                <Products></Products>
            </section>
        </div>
    );
};

export default Home;