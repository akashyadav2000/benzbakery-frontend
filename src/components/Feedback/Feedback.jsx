import React, { useState } from "react";
import axios from "axios";
import "./Feedback.css";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    productName: "",
    message: "",
  });

  const validateInputs = () => {
    const updatedErrorMessages = {
      name: /^[A-Za-z][A-Za-z\s]*$/.test(name) && name.length <= 50
        ? ""
        : "Name should only contain alphabets.",
      email: /^[^\s@]+@[^\s@]+\.(?:com|net|org|edu)$/.test(email) && email.length <= 100
        ? ""
        : "Invalid email address.",
      productName: /^[A-Za-z][A-Za-z\s]*$/.test(productName) && productName.length <= 50
        ? ""
        : "Product name only contain alphabets.",
      message: /^[A-Za-z][A-Za-z\s]*$/.test(message) && message.length <= 500
        ? ""
        : "Please enter your message..",
    };

    setErrorMessages(updatedErrorMessages);

    return Object.values(updatedErrorMessages).every((msg) => msg === "");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (validateInputs()) {
      const formData = { name, email, productName, message };

      try {
        const res = await axios.post("https://benzbakery-backend.onrender.com/feedback", formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (res.data.status === "Success") {
          setFeedbackMessage("Your details have been successfully submitted. Thanks!");
          setName("");
          setEmail("");
          setProductName("");
          setMessage("");
          setTimeout(() => {
            setFeedbackMessage("");
          }, 2000000);
        } else {
          setFeedbackMessage("An error occurred. Please try again.");
        }
      } catch (err) {
        setFeedbackMessage("An error occurred. Please try again.");
      }
    } else {
      setFeedbackMessage("Please correct the highlighted errors.");
    }
  };

  const handleClosePopup = () => {
    setFeedbackMessage("");
  };

  return (
    <div className="contact-container">
      <form onSubmit={onSubmit} className="contact-left">
        <div className="contact-left-title">
          <span className="feedback-title">Feedback Form</span>
          <hr className="hr" />
        </div>
        <span className="feedback-details">Name</span>
        <input
          type="text"
          name="name"
          // placeholder="Your Name"
          required
          className="contact-inputs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="50"
        />
        <p className="feedback-error-messages">{errorMessages.name}</p>

        <span className="feedback-details">Email id</span>
        <input
          type="email"
          name="email"
          required
          // placeholder="Your Email"
          className="contact-inputs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength="100"
        />
        <p className="feedback-error-messages">{errorMessages.email}</p>

        <span className="feedback-details">Product Name</span>
        <input
          type="text"
          name="productName"
          required
          // placeholder="Product Name"
          className="contact-inputs"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          maxLength="50"
        />
        <p className="feedback-error-messages">{errorMessages.productName}</p>

        <span className="feedback-details">Message</span>
        <textarea
          name="message"
          required
          // placeholder="Your Message"
          className="contact-inputs"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength="500"
        ></textarea>
        <p className="feedback-error-messages">{errorMessages.message}</p>

        <button className="feedback-submit" type="submit">
          Submit
        </button>

        {feedbackMessage && (
          <div className={`feedback-message ${feedbackMessage.includes("submitted") ? "success" : "error"}`}>
            {feedbackMessage}
            {feedbackMessage.includes('submitted') && (
              <div className="container">
                <div className="popup open-popup">
                  <img src="./Images/tick.png" alt="tick" />
                  <h2>Thank You</h2>
                  <p>{feedbackMessage}</p>
                  <button className="button" onClick={handleClosePopup}>
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </form>
      <div className="contact-right">
        <img src="./Images/flower.jpg" alt="feedback-img" />
      </div>
    </div>
  );
}

export default Feedback;
