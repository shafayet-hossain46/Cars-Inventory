import React from "react";
import { Button, Card } from "react-bootstrap";

const EmailVerified = () => {
  return (
    <div className="row align-items-center mt-5 justify-content-center">
      <div className="col-md-3 p-4 mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center my-3">Your Email Is Not Verified Yet!!!</Card.Title>
          <div  className="d-grid gap-2">
            <Button variant="primary">Re-send Verification</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default EmailVerified;
