import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import ImageLoader from "../components/ImageLoader";
import PasswordToggle from "../components/PasswordToggle";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from 'next-auth/react';



const SignUpModalLight = ({ onSwap, pillButtons, ...props }) => {
  const { data: session } = useSession();
  const Router = useRouter();
  const [isSent, setIsSent] = useState(false);
  const [otpEntered, setOtpEntered] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);

  // Form validation

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
      const otp = Math.floor(100000 + Math.random() * 900000);
      // Send a POST request to the server
      setIsSent(true);
      try {
        const response = await axios.post(
          `https://proket.in/tab_otp.php?email=${email}&otp=${otp}`
        );
        console.log(email, otp);
        console.log("Password Reset Initiated", response.data);
        // alert('Sign-in successful!');
        // You may want to handle navigation or state update here
      } catch (error) {
        console.log(
          "Password Reset Failed" +
            (error.response?.data.message || error.message)
        );
      }
    }
    setValidated(true);
  };

  const handleResendOtp = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const otp = Math.floor(100000 + Math.random() * 900000);
    setIsSent(true);
    // API call to sign-in endpoint
    try {
      const response = await axios.post(
        `https://proket.in/tab_otp.php?email=${email}&otp=${otp}`
      );
      console.log(email, otp);
      // alert('Sign-in successful!');
      // You may want to handle navigation or state update here
    } catch (error) {
      console.log(
        "Password Reset Failed" +
          (error.response?.data.message || error.message)
      );
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
      // Send a POST request to the server
      try {
        const response = await axios.post("/api/signup", {
          name,
          email,
          password,
        });
        alert("Signup successful!");
        console.log(response.data);
        // Handle response and actions after sign up
      } catch (error) {
        alert("Signup failed: " + error.response.data.message);
      }
      Router.push("/");
      setIsSent(false);
    }
  };

  return (
    <div>
      {!isSent ? (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="mt-4">
            <ImageLoader
              src="/images/Frame 2.jpg"
              width={180}
              height={84}
              alt="Illustration"
            />
          </div>

          <div
            className="mx-auto mt-4 mb-4 shadow rounded-4"
            style={{ border: "1px black", width: "1258px", height: "856px" }}
          >
            <div className="row mx-0 align-items-center">
              <div className="col-md-6 border-end-md p-4 p-sm-5">
                <h2
                  className="h1 mb-4 mb-sm-5"
                  style={{ font: "DM Sans", fontWeight: "700" }}
                >
                  Join TAB.
                  <br />
                  Get premium benefits:
                </h2>
                <ul className="list-unstyled mb-4 mb-sm-5">
                  <li className="d-flex mb-2">
                    <i className="fi-check-circle text-primary mt-1 me-2"></i>
                    <span>Add and promote your listings</span>
                  </li>
                  <li className="d-flex mb-2">
                    <i className="fi-check-circle text-primary mt-1 me-2"></i>
                    <span>Easily manage your wishlist</span>
                  </li>
                  <li className="d-flex mb-0">
                    <i className="fi-check-circle text-primary mt-1 me-2"></i>
                    <span>Leave reviews</span>
                  </li>
                </ul>
                <div className="d-flex justify-content-center">
                  <ImageLoader
                    src="/images/Container.jpg"
                    width={344}
                    height={404}
                    alt="Illusration"
                  />
                </div>
                <div className="mt-sm-4 pt-md-3">
                  Already have an account?{" "}
                  <a href="/" onClick={onSwap}>
                    Sign in
                  </a>
                </div>
              </div>
              <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="su-name" className="mb-4">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                      placeholder="Enter your full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="su-email" className="mb-4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="su-password">
                      Password{" "}
                      <span className="fs-sm text-muted">min. 8 char</span>
                    </Form.Label>
                    <PasswordToggle
                      id="su-password"
                      minLength="8"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="su-confirm-password">
                      Confirm password
                    </Form.Label>
                    <PasswordToggle
                      id="su-confirm-password"
                      minLength="8"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="terms-agree"
                    label={[
                      <span key={1}>By joining, I agree to the </span>,
                      <Link key={2} href="#">
                        Terms of use
                      </Link>,
                      <span key={3}> and </span>,
                      <Link key={4} href="#">
                        Privacy policy
                      </Link>,
                    ]}
                    required
                    className="mb-4"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    variant={`primary ${
                      pillButtons ? "rounded-pill" : ""
                    } w-100`}
                  >
                    Sign up
                  </Button>
                </Form>
                <div className="d-flex align-items-center py-3 mb-3">
                  <hr className="w-100" />
                  <div className="px-3">Or</div>
                  <hr className="w-100" />
                </div>
                <Row>
                  <Col>
                   
                      <Button onClick={() => signIn('google')}
                        variant={`outline-info ${
                          pillButtons ? "rounded-pill" : ""
                        } w-100 mb-3`}
                      >
                        <i className="fi-google fs-lg me-1"></i>
                      </Button>
                  </Col>
                  <Col>
                    <Button
                      variant={`outline-info ${
                        pillButtons ? "rounded-pill" : ""
                      } w-100 mb-3`}
                    >
                      <i className="fi-facebook fs-lg me-1"></i>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant={`outline-info ${
                        pillButtons ? "rounded-pill" : ""
                      } w-100 mb-3`}
                    >
                      <i className="fi-linkedin fs-lg me-1"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" mx-auto mt-4 mb-4 shadow rounded-4"
          style={{ border: "1px black", width: "50%", height: "100%" }}
        >
          <div className="mx-0 align-items-center">
            <div
              className="mt-4"
              style={{
                maxWidth: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <ImageLoader
                src="/images/Frame 2.jpg"
                width={180}
                height={84}
                alt="Illustration"
              />
            </div>
            <div className=" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
              <p>Enter the OTP sent to your email address.</p>

              <Form noValidate validated={validated}>
                <Form.Group controlId="si-email" className="mt-4 mb-4">
                  <Form.Label>Enter the OTP</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter the OTP"
                    required
                    value={otpEntered}
                    onChange={(e) => setOtpEntered(e.target.value)}
                  />
                </Form.Group>

                <Button
                  onClick={() => {
                    handleOtpSubmit;
                  }}
                  type="submit"
                  size="lg"
                  variant={`primary ${pillButtons ? "rounded-pill" : ""} w-100`}
                >
                  Continue
                </Button>
              </Form>
              <a
                className="mt-2 mt-sm-2 mt-md-3"
                onClick={handleResendOtp}
                style={{ cursor: "pointer", display: "block" }}
              >
                Resend OTP
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpModalLight;