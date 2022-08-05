import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container } from "react-bootstrap";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import Rating from "react-rating";

const ReviewCarousel = () => {
  const [user, loading, error] = useAuthState(auth);

  // Get Reviews
  const [reviews, setReviews] = useState([]);

  // Get Reviews
  useEffect(() => {
    axios
      .get("https://nameless-shore-79198.herokuapp.com/reviews")
      .then((res) => {
        setReviews(res.data);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Reviews From The People</h2>
      <Carousel
        className="pb-5"
        responsive={responsive}
        draggable={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {reviews.map((review) => (
          <Card
            style={{
              boxShadow:
                "rgba(130, 165, 191, 0.48) 0px 10px 20px 0px, rgba(255, 255, 255, 0.8) 6px 2px 16px 10px",
            }}
            className="mx-3 border-0  "
          >
            <Card.Body className="text-center">
              <Card.Title
                style={{
                  color: "#008080",
                }}
              >
                {review?.name}
              </Card.Title>
              <Rating
                style={{
                  color: "#008080",
                }}
                readonly
                initialRating={review?.rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                activeColor="#ffd700"
              />
              <Card.Text>{review?.comment}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default ReviewCarousel;
