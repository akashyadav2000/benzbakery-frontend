import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faLock, faCheckCircle, } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { login } from "../Store/authSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [eye, setEye] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordEye = () => {
    setEye(!eye);
  };

  const validateInputs = () => {
    const updatedErrorMessages = {
      email: /^[^\s@]+@([^\s@]+\.)?gmail\.com$/.test(email)
        ? ""
        : "Please enter a valid Gmail address",
      password: /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=])[A-Za-z0-9@#$%^&+=]{8,}$/.test(
        password
      )
        ? ""
        : "Password must be 8 characters long, include special character and number.",
    };

    const isValid = Object.values(updatedErrorMessages).every(
      (message) => message === ""
    );

    setErrorMessages(updatedErrorMessages);

    return { isValid, updatedErrorMessages };
  };

  const login_handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid } = validateInputs();

    if (isValid) {
      setFeedbackMessage("");

      try {
        const response = await axios.post("https://benzbakery-backend.onrender.com/login", {
          email,
          password,
        });
        if (response.data.status === "Success") {
          const user = response.data.user; // Get the user details from the response
          dispatch(login(user));
          setFeedbackMessage("Login successful ...");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          setFeedbackMessage(response.data.message || "Login failed. Please try again.");
        }
      } catch (err) {
        if (err.response && err.response.data) {
          setFeedbackMessage(err.response.data);
        } else {
          setFeedbackMessage("Login failed. Please try again.");
          // setFeedbackMessage(
          //   response.data.message || "Login failed. Please try again."
          // );
        }
      }
    } else {
      setFeedbackMessage("Please correct the highlighted errors.");
    }
  };

  const handleLogin = () => {
    const { isValid } = validateInputs();
    if (isValid) {
      console.log("Login successful!");
      setFeedbackMessage(""); // Clear the feedback message
    }
  };

  return (
    <div className="login-mobile-bg">
      <div className="login-container">
        <div className="login-image-container">
          <img src="./Images/signup-login-bg.jpg" alt="Login_Background" />
        </div>

        <div className="login-form-container" id="login-page">
          <form onSubmit={login_handleSubmit}>
            <div className="login-user-details">
              <div className="login-title">LOGIN</div>

              <span className="login-details">Email id</span>
              <input
                type="email"
                id="email"
                required
                value={email}
                className="login-text-box"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon className="login-icon" icon={faEnvelope} />
              <p className="login-error-messages">{errorMessages.email}</p>

              <span className="login-details">Password</span>
              <input
                type={eye ? "password" : "text"}
                id="pass"
                required
                value={password}
                className="login-pass-box login-text-box"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon className="login-icon" icon={faLock} />
              {eye ? (
                <FontAwesomeIcon
                  className="login-password-eye"
                  icon={faEye}
                  onClick={handlePasswordEye}
                />
              ) : (
                <FontAwesomeIcon
                  className="login-password-eye"
                  icon={faEyeSlash}
                  onClick={handlePasswordEye}
                />
              )}
              <p className="login-error-messages">{errorMessages.password}</p>

              <button
                id="login_btn"
                className="login-btn"
                type="submit"
                onClick={handleLogin}
              >
                Log In
              </button>

              {feedbackMessage && (
                <p
                  className={`login-feedback-message ${feedbackMessage.includes("successful") ? "success" : "error"
                    }`}
                >
                  {feedbackMessage}
                  {feedbackMessage.includes("successful") && (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  )}
                </p>
              )}

              <Link to={"/Signup"} className="signup-line">
                Don't have an account?
                <span className="signup-link"> Sign up</span>
              </Link>

              {/* <Link to="" className="forgot-pwd">
                Forgot Password?
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
