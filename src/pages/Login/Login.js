import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import img from "../../images/login.jpg";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // Sign In With Email And Password
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmitSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    navigate(from, { replace: true });
  };

  if (user) {
    navigate(from, { replace: true });
  }

  // Google Sing In
  const googleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <Container>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8">
          <div className="row shadow py-5 border rounded-3 mt-5 align-items-center justify-content-center">
            <div className="col-md-6 px-5">
              <div className="row align-items-center">
                <div className="mx-auto px-3">
                  <h2 className="mb-4 text-center" style={{ color: "#00DFC0" }}>
                    Login-In
                  </h2>
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
                      <Button
                        style={{ background: "#00DFC0", border: "none" }}
                        type="submit"
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="d-grid mb-2">
                    <Button
                      onClick={googleSignIn}
                      style={{ background: "#00DFC0", border: "none" }}
                      type="submit"
                    >
                      Google Sign In
                    </Button>
                  </div>
                  <Link
                    to="/register"
                    style={{
                      color: "#00DFC0",
                      border: "none",
                      textDecoration: "none",
                    }}
                  >
                    Need An Account?
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5">
              <img src={img} className="img-fluid" alt="login" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
