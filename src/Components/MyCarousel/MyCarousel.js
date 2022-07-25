import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import imageOne from '../../images/first.jpg'
import imageSecond from '../../images/second.jpg'

const MyCarousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
        style={{maxHeight: "640px"}}
          className="d-block w-100 hv-auto img-fluid"
          src={imageOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageSecond}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default MyCarousel;