import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    // Crate User
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    // OnSubmit
    const onSubmitData = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Creating User
        createUserWithEmailAndPassword(email, password)
        e.target.reset()
        navigate('/home')
    }
    return (
        <div className="w-25 mx-auto mt-5">
      <h2 className="my-4 text-center">Create An Account</h2>
      <Form onSubmit={onSubmitData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>
        <div className="d-grid mb-2">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
        <Link to="/login" style={{textDecoration: "none"}} className="my-3">Already Have An Account?</Link>
    </div>
    );
};

export default Register;