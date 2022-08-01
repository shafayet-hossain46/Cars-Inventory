import React from 'react';
import InventorySection from '../../Components/InventorySection/InventorySection';
import MyCarousel from '../../Components/MyCarousel/MyCarousel';

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <InventorySection></InventorySection>
        </div>
    );
};

export default Home;