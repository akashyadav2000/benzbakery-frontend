import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Footer() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    email: "",
  });

  const validateInputs = () => {
    const updatedErrorMessages = {
      email: /^[^\s@]+@[^\s@]+\.(?:com)$/.test(email) && email.length <= 50
        ? ""
        : "Please enter a valid email.",
    };
    const isValid = Object.values(updatedErrorMessages).every(
      (message) => message === ""
    );

    setErrorMessages(updatedErrorMessages);

    return { isValid, updatedErrorMessages };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid } = validateInputs();

    if (isValid) {
      setFeedbackMessage("");
      try {
        const result = await axios.post("https://benzbakery-backend.onrender.com/newsLetter", { email });
        setFeedbackMessage("Thank you for subscribing!...");
        setEmail(""); // Clear the input field
        setTimeout(() => setFeedbackMessage(""), 2000);
      } catch (err) {
        if (err.response && err.response.data) {
          setFeedbackMessage(err.response.data.message || "An error occurred. Please try again.");
        } else {
          setFeedbackMessage("An error occurred. Please try again.");
        }
      }
    }
    // else {
    //   setFeedbackMessage("Please correct the highlighted errors.");
    // }
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // closeMobileMenu();
  };

  return (
    <>
      <span className="white"></span>
      <footer>
        <div className="foot-row">
          <div className="foot-col foot-col-image">
            <img src="./Images/pink.png" className="f-logo" alt="Cakef-logo" />
            <p>
              We have aim to provide fresh and high quality baked goods , So
              please enjoy this is our tradition.
            </p>
          </div>

          <div className="foot-col">
            <h3>
              Shop
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p className="footer-address">TembipadaRoad ,Bhandup (West) Mumbai, 400078, India</p>
            <p className="email-id">Akashvinodyadav11@gmail.com</p>
            <h4> Mon - Sun &nbsp; &nbsp; 10Am &nbsp;10Pm</h4>
          </div>

          <div className="foot-col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>

            <ul className="footer-link">
              <li>
                <Link to={"/"} onClick={handleScrollToTop}>Home</Link>
              </li>
              <li>
                <Link to={"/Product"}>Products</Link>
              </li>
              <li>
                <Link to={"/About"}>About</Link>
              </li>
              <li>
                <Link to={"/Feedback"}>Feedback</Link>
              </li>
            </ul>
          </div>

          <div className="newsleter-container">
            <div className="foot-col">
              <h3>
                Newsletter
                <div className="underline">
                  <span></span>
                </div>
              </h3>

              <form className="newsletter" onSubmit={handleSubmit}>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <input
                  type="email"
                  placeholder="Enter your email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" aria-label="newsletter">
                  <FontAwesomeIcon className="icon_2" icon={faArrowRight} />
                </button>
              </form>
              {errorMessages.email && (
                <p className="newsletter-error-messages">{errorMessages.email}</p>
              )}

              {!errorMessages.email && feedbackMessage && (
                <div className={`newsletter-message ${feedbackMessage.includes('subscribing') ? 'success' : 'error'}`}>
                  {feedbackMessage}
                  {feedbackMessage.includes('subscribing') && (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  )}
                </div>
              )}

              <div className="social-icons">
                <div className="iconic">
                  <Link to="https://www.facebook.com/" className="link1" aria-label="fb">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="https://www.instagram.com/" className="link2" aria-label="insta">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link to="https://www.twitter.com/" className="link3" aria-label="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link to="https://www.youtube.com/" className="link4" aria-label="yt">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr className="rooter-hr" />
        <p className="copyright">Designed and developed by Akash Yadav.</p>
      </footer>
    </>
  );
}

export default Footer;
