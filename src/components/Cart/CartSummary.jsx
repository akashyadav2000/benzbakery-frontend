import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import "./Cart.css";
import { selectUser } from "../Store/authSlice";
import { cartActions } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const CartSummary = () => {
  const bagItems = useSelector((state) => state.cart);
  const user = useSelector(selectUser);
  // const user = useSelector((state) => state.auth.user); 
  const dispatch = useDispatch();

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

  const handleProceedToBuy = async () => {
    try {
      // Replace with your backend API endpoint for order creation
      const { data: order } = await axios.post("https://benzbakery-backend.onrender.com/create-order", {
        amount: finalPayment, // totalPrice should already exist in your code
        receipt: "receipt_" + new Date().getTime(),
      });

      // Razorpay options
      const options = {
        key: process.env.KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Your Shop",
        description: "Complete your purchase",
        order_id: order.id,
        handler: function (response) {

          // Clear the cart after successful payment
          dispatch(cartActions.clearCart());
        },
        prefill: {
          name: user.name || "Guest", // Replace with your user's name if available
          email: user.email || "guest@example.com", // Replace with your user's email if available
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Open Razorpay payment window
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error while initiating payment:", error);
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
    </div>
  );
};

export default CartSummary;
