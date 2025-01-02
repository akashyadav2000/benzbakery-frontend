import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./Cart.css";
import { selectUser } from "../Store/authSlice";
import { cartActions } from "../Store/cartSlice";
import { addPurchase } from "../Store/authSlice"; // Import the addPurchase action
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const bagItems = useSelector((state) => state.cart);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [
    "cakeItems",
    "pastryItems",
    "cupCakeItems",
    "weddingCakeItems",
  ];

  // Fetch all items from categories and match with bagItems
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
  const totalItem = bagItems.length;
  const finalPayment = totalValue + CONVENIENCE_FEES;

  const handleProceedToBuy = async () => {
    try {
      const { data: order } = await axios.post(
        "https://benzbakery-backend.onrender.com/create-order",
        {
          amount: finalPayment,
          receipt: "receipt_" + new Date().getTime(),
        }
      );

      // Prepare purchase data
      const purchaseData = finalItems.map((item) => {
        const itemCount = bagItems.filter((id) => id === item.id).length;
        return {
          name: item.item,
          quantity: itemCount,
          price: item.price,
          total: item.price * itemCount,
          image: item.image, // Include image here

        };
      });

      // Dispatch all purchases to purchase history
      dispatch(addPurchase(purchaseData)); // Corrected action dispatch

      // Razorpay options
      const options = {
        key: process.env.KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Benz Bakery",
        description: "Complete your purchase",
        order_id: order.id,
        handler: function (response) {
          console.log("Payment successful:", response);

          // Clear the cart after successful payment
          dispatch(cartActions.clearCart());

          // Navigate to UserProfile
          navigate("/UserProfile");
        },
        prefill: {
          name: user?.name || "Guest", // User's name if available
          email: user?.email || "guest@example.com", // User's email if available
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
            ₹{CONVENIENCE_FEES}
          </span>
        </div>
        <hr className="summary-hr" />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order" onClick={handleProceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
};

export default CartSummary;
