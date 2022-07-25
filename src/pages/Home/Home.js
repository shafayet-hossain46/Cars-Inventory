import React from 'react';
import InventorySection from '../../Components/InventorySection/InventorySection';
import MyCarousel from '../../Components/MyCarousel/MyCarousel';

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <InventorySection></InventorySection>
            This is home
        </div>
    );
};

export default Home;