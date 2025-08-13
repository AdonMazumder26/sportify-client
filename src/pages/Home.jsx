import React from 'react';
import Banner from '../components/Banner';
import Equipments from '../components/Equipments';
import { useLoaderData, useOutletContext } from 'react-router-dom';

const Home = () => {
    const loadedEquipments = useLoaderData();
    const { darkMode } = useOutletContext();

    return (
        <div>
            <section className='banner'>
                <Banner></Banner>
            </section>
            <section >
                <Equipments loadedEquipments={loadedEquipments} darkMode={darkMode}></Equipments>
            </section>
        </div>
    );
};

export default Home;