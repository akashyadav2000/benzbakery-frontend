import { useSelector } from "react-redux";
import { useState } from "react";
import "./Cart.css";

const CartSummary = () => {
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const bagItems = useSelector((state) => state.cart);

  const categories = [
    "cakeItems",
    "pastryItems",
    "cupCakeItems",
    "weddingCakeItems",
  ];

  const finalItems = categories.flatMap((category) => {
    const items = useSelector((state) => state[category]);
    return items.filter((item) => bagItems.includes(item.id));
  });

  // Calculate the total value of all items in the cart
  const totalValue = finalItems.reduce((accumulator, currentItem) => {
    const itemCount = bagItems.filter((id) => id === currentItem.id).length;
    return accumulator + currentItem.price * itemCount;
  }, 0);

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;
  let finalPayment = totalValue + CONVENIENCE_FEES;

  // const handleProceedToBuy = () => {
  //   setShowPaymentMessage(true);
  // };

  const handleProceedToBuy = async () => {
    try {
      const response = await fetch("http://localhost:3001/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalPayment, currency: "INR" }),
      });

      const orderData = await response.json();
      const options = {
        key: process.env.REACT_APP_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Benz Bakery",
        description: "Test Transaction",
        order_id: orderData.id,
        handler: async (response) => {
          const verifyResponse = await fetch(
            "http://localhost:3001/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );
          const verification = await verifyResponse.json();
          if (verification.success) {
            alert("Payment Successful");
          } else {
            alert("Payment Verification Failed");
          }
        },
        prefill: {
          name: "Akash Yadav",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#F37254" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="cart-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalValue}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value priceDetail-base-discount">
            ₹99
          </span>
        </div>
        <hr className="summary-hr" />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order" onClick={handleProceedToBuy}>
        Proceed to buy
      </button>
      {showPaymentMessage && (
        <div className="payment-gateway-message">
          Payment gateway adding soon
        </div>
      )}
    </div>
  );
};

export default CartSummary;
