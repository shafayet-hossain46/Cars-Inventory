import React from 'react';
import img from '../../images/404-error.gif'
import {Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6 text-center">
                    <img className="img-fluid" src={img} alt="4O4" />
                    <Button as={Link} to="/home" className="btn btn-lg" style={{ background: "#008080", border: "none" }}>Get Back To Home</Button>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;