import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";
import img from '../../images/register.png'

const Register = () => {
  const navigate = useNavigate();

  // Crate User
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  // OnSubmit
  const onSubmitData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Creating User
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
    navigate("/home");
  };

  return (
    <Container>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8">
          <div className="row shadow py-5 px-2 border-0 rounded-3 mt-5 align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="row mx-auto">
                <h2 className="mb-4 text-center" style={{ color: "#008080"}}>Create An Account</h2>
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
                    <Button style={{ background: "#008080", border: "none" }} type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#008080" }}
                  className="my-3"
                >
                  Already Have An Account?
                </Link>
              </div>
            </div>
            <div className="col-md-6">
            <img src={img} className="img-fluid" alt="login" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
