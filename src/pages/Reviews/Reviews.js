import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Reviews = () => {
  // Ratting
  const [rate, setRate] = useState(1);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const onSubmitReviews = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const rating = rate;
    const data = {name, comment, rating}

    axios.post("http://localhost:5000/reviews", data)
    .then(res => {
        console.log(res.data)
        e.target.reset()
    })
  }


     




    return (
        <Container>
            <div className="row align-items-center justify-content-center my-5">
            <div className="col-md-6 px-5">
          <Form onSubmit={onSubmitReviews} style={{
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                }} className="mt-5 p-4" sticky="top">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
          <h3 style={{ color: "#008080"}} className="text-center mb-4">
            Your Reviews
          </h3>
              <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>
              <textarea id="" className="form-control mb-3" name="comment" rows="5" placeholder="Your Reviews Goes Here!!!"></textarea>
              <div className="mb-2">
              <p className="p-0 m-0">Rate The Site</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div className="d-grid gap-2 mx-auto">
              <Button style={{ background: "#008080"}} variant="primary" type="submit">
                Submit Your Reviews
              </Button>
            </div>
          </Form>
        </div>
        </div>
        </Container>
    );
};

export default Reviews;