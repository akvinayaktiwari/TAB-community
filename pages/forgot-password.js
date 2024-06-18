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
import { useRouter } from "next/router";

const ForgotPassword = ({ onSwap, pillButtons, ...props }) => {
  // Form validation
  const router = useRouter();
  const [isSent, setIsSent] = useState(false);
  const [otpEntered, setOtpEntered] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(otp, otpEntered);
      if (otp !== otpEntered) {
        alert("OTP not verified");
      } else {
        alert("OTP Matched");
        router.push("./change-password");
      }
    }
  };

  const handleResendOtp = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const otp = Math.floor(100000 + Math.random() * 900000);
    setIsSent(true);
    // API call to sign-in endpoint
    try {
      const response = await axios.post(
        `https://proket.in/tab_otp.php?email=${email}&otp=${otp}&reset=true`
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const otp = Math.floor(100000 + Math.random() * 900000);
      setIsSent(true);
      // API call to sign-in endpoint
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

  return (
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
          {!isSent ? (
            <div>
              <p>
                Enter the email address associated with your account and we'll
                send you an OTP to verify your account.
              </p>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="si-email" className="mt-4 mb-4">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  size="lg"
                  variant={`primary ${pillButtons ? "rounded-pill" : ""} w-100`}
                >
                  Continue
                </Button>
              </Form>
            </div>
          ) : (
            <div>
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
          )}
          <div className="mt-4 mt-sm-5">
            Don&apos;t have an account?{" "}
            <a href="./sign-up" onClick={onSwap}>
              Sign up here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
