import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/Firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailVerified = () => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification ] = useSendEmailVerification(auth);
  return (
    <Container>
      <div className="row align-items-center mt-5 justify-content-center">
      <div className="col-md-4 p-4 mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="my-3">Your Email Is Not Verified Yet!!! <br /><small style={{fontSize: "15px"}}> Check Your Mail : <span className="text-danger">({user?.email})</span></small> </Card.Title>
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
    </Container>
  );
};

export default EmailVerified;
