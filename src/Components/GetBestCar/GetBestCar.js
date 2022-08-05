import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../../images/jeep.png'

const GetBestCar = () => {
    return (
        <Container>
                <div className="row align-items-center">
                    <div className="col-md-6 px-5">
                        <h2 style={{
                        color: "#008080"
                    }}>Get Your Best Brand</h2>
                    <p className="mt-4">
                        We basically provides the best qualities car brands and we are being the number one company who
                        is ensuring the best service in the competition. In other words, it is the main target to ensure the
                         better quality with the better services.
                    </p>
                    <Button as={Link} to="/manageInventory" className="text-white" style={{ background: "#008080", border: "none" }} size="lg">
                        Mange Inventories
                    </Button>
                    </div>
                <div className="col-md-6">
                    <img src={pic} className="img-fluid" alt="jeep Picture" />
                </div>
            </div>
        </Container>
    );
};

export default GetBestCar;