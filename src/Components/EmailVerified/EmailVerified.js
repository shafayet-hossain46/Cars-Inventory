import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/Firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailVerified = () => {
    
  const [sendEmailVerification ] = useSendEmailVerification(auth);
  return (
    <div className="row align-items-center mt-5 justify-content-center">
      <div className="col-md-3 p-4 mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center my-3">Your Email Is Not Verified Yet!!!</Card.Title>
          <div  className="d-grid gap-2">
            <Button
            onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
              }}
            variant="primary">Re-send Verification</Button>
            <ToastContainer />
          </div>
        </Card.Body>
      </Card>
        
      </div>
    </div>
  );
};

export default EmailVerified;
