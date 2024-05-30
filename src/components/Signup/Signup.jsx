import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faUserAlt, faLock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";
import { login } from "../Store/authSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const [eye, setEye] = useState(true);
  const [ceye, setCeye] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordEye = () => {
    setEye(!eye);
  };

  const handlePasswordCeye = () => {
    setCeye(!ceye);
  };

  const validateInputs = () => {
    const updatedErrorMessages = {
      username: /^[A-Za-z][A-Za-z\s]*$/.test(name) && name.length <= 23
        ? ""
        : "Name should only contain alphabets",
      email: /^[^\s@]+@[^\s@]+\.(?:com)$/.test(email) && email.length <= 50

        ? ""
        : "Invalid email address",
      password: /^(?=.*[A-Za-z])(?=.*[@#$%^&+=])(?=.*[0-9])[A-Za-z0-9@#$%^&+=]{8,}$/.test(password) && password.length <= 30
        ? ""
        : "Password must be 8 characters long, include special character and number.",
      confirmPassword: password === confirmPassword ? "" : "Passwords do not match",
    };

    setErrorMessages(updatedErrorMessages);

    return Object.values(updatedErrorMessages).every(
      (message) => message === ""
    );
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      try {
        const result = await axios.post("https://benzbakery-backend.onrender.com/signup", { name, email, password });
        const user = { name, email }; // Assuming the response contains user details
        dispatch(login(user));
        setFeedbackMessage("Registration successful...");
        setTimeout(() => {
          navigate('/Login');
        }, 2000);
      } catch (err) {
        if (err.response && err.response.data) {
          setFeedbackMessage(err.response.data.message || "An error occurred. Please try again.");
        } else {
          setFeedbackMessage("An error occurred. Please try again.");
        }
      }
    } else {
      setFeedbackMessage("Please correct the highlighted errors.");
    }
  };

  return (
    <div className="signup-mobile-bg">
      <div className="signup-container">
        <div className="signup-image-container">
          <img src="./Images/signup-login-bg.jpg" alt="Signup_Background" />
        </div>
        <div className="signup-form-container" id="signup_form_container">
          <form onSubmit={handleSignup}>
            <div className="signup-user-details">
              <div className="signup-title">REGISTRATION</div>

              <span className="signup-details">User Name</span>
              <input
                type="text"
                id="uname"
                // placeholder="Username"
                required
                className="signup-text-box"
                autoComplete="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="23"
              />
              <FontAwesomeIcon className="signup-icon" icon={faUserAlt} />
              <p className="signup-error-messages">{errorMessages.username}</p>

              <span className="signup-details">Email</span>
              <input
                type="email"
                id="email"
                // placeholder="Email-id"
                required
                className="signup-text-box"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="50"
              />
              <FontAwesomeIcon className="signup-icon" icon={faEnvelope} />
              <p className="signup-error-messages">{errorMessages.email}</p>

              <span className="signup-details">Password</span>
              <input
                type={eye ? "password" : "text"}
                id="pass"
                // placeholder="Password"
                required
                className="signup-pass-box signup-text-box"
                autoComplete="new-password"
                value={password}
                maxLength="30"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon className="signup-icon" icon={faLock} />
              {eye ? (
                <FontAwesomeIcon
                  className="signup-password-eye"
                  icon={faEye}
                  onClick={handlePasswordEye}
                />
              ) : (
                <FontAwesomeIcon
                  className="signup-password-eye"
                  icon={faEyeSlash}
                  onClick={handlePasswordEye}
                />
              )}
              <p className="signup-error-messages">{errorMessages.password}</p>

              <span className="signup-details">Confirm Password</span>
              <input
                type={ceye ? "password" : "text"}
                id="cpass"
                // placeholder="Confirm Password"
                required
                className="signup-pass-box signup-text-box"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                maxLength="30"
              />
              <FontAwesomeIcon className="signup-icon" icon={faLock} />
              {ceye ? (
                <FontAwesomeIcon
                  className="signup-password-eye"
                  icon={faEye}
                  onClick={handlePasswordCeye}
                />
              ) : (
                <FontAwesomeIcon
                  className="signup-password-eye"
                  icon={faEyeSlash}
                  onClick={handlePasswordCeye}
                />
              )}
              <p className="signup-error-messages">{errorMessages.confirmPassword}</p>

              <button id="signup_btn" className="signup-btn" type="submit">
                Sign Up
              </button>

              {feedbackMessage && (
                <p className={`signup-feedback-message ${feedbackMessage.includes('successful') ? 'success' : 'error'}`}>
                  {feedbackMessage}
                  {feedbackMessage.includes('successful') && (
                    <FontAwesomeIcon icon={faCheckCircle} />)}
                </p>
              )}

              <Link to={"/Login"} className="login-line">
                Have an account already? <span className="login-link">log in</span>
              </Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
