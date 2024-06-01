import { useSelector } from "react-redux";
import "./Cart.css";

const CartSummary = () => {
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
      <button className="btn-place-order">
        <div className="buy-btn">Proceed to buy</div>
      </button>
    </div>
  </>
  );
};

export default CartSummary;
