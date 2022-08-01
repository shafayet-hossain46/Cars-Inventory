import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init'

const Login = () => {
    // Google Sing In
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const googleSignIn = () => {
        signInWithGoogle()
    }

    // Sign In With Email And Password
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmitSignIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        e.target.reset();
    }
    
    return (
        <div className="row align-items-center">
            <div className="w-25 mx-auto mt-5">
                <h2 className="my-4 text-center">Login Into Your Account</h2>
                <Form onSubmit={onSubmitSignIn}>
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
                        Login
                    </Button>
                    </div>
                </Form>
                    <div className="d-grid mb-2">
                    <Button onClick={googleSignIn} variant="primary" type="submit">
                        Google Sign In
                    </Button>
                    </div>
                <Link to="/register" style={{textDecoration: "none"}}>Need An Account?</Link>
            </div>
        </div>
    );
};

export default Login;