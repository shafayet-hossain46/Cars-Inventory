import React from 'react';
import InventorySection from '../../Components/InventorySection/InventorySection';
import MyCarousel from '../../Components/MyCarousel/MyCarousel';
import ReviewCarousel from '../../Components/ReviewCarousel/ReviewCarousel';

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <InventorySection></InventorySection>
            <ReviewCarousel></ReviewCarousel>
        </div>
    );
};

export default Home;