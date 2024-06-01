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

  const handleProceedToBuy = () => {
    // Show the payment gateway message when the user clicks on "Proceed to buy"
    setShowPaymentMessage(true);
    // Add your logic for proceeding with the payment here
  };

  return (<>
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
  </>
  );
};

export default CartSummary;
