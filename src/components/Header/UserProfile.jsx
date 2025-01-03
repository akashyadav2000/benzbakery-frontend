import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, selectPurchaseHistory } from "../Store/authSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const purchaseHistory = useSelector(selectPurchaseHistory);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  const calculateTotalAmount = () => {
    let total = 0;
    purchaseHistory.forEach((purchase) => {
      total += purchase.total;
    });
    return total;
  };

  if (!isAuthenticated) return null;

  const totalAmount = calculateTotalAmount();
  const convenienceFee = 99;
  const finalTotal = totalAmount + convenienceFee;

  return (
    <div className="blur-bg">
      <div className="user-info">
        <span className="user-profile-title">User Profile</span>
        <div className="user-profile">
          <img src="./Images/user-logo.png" alt="user-profile" />
          <span className="hello-user">
            Name: {user?.name}
            <br />
            {user?.email}
          </span>
        </div>

        <div className="purchase-history">
          <p className="purchase-history-head">Purchase History</p>
          {purchaseHistory.length > 0 ? (
            <table className="purchase-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {purchaseHistory.map((purchase, index) => (
                  <tr key={index}>
                    <td>
                      <LazyLoadImage
                        src={purchase.image}
                        alt={purchase.name}
                        effect="blur"
                        className="purchase-image"
                      />
                    </td>
                    <td>{purchase.name}</td>
                    <td>₹{purchase.price}</td>
                    <td>{purchase.quantity}</td>
                    <td>₹{purchase.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-purchase">* No purchases yet! *</p>
          )}
        </div>

        <div className="summary">
          <div className="summary-item">
            <span>Convenience Fee:</span>
            <span>₹{convenienceFee}</span>
          </div>
          <div className="summary-item total">
            <span>Final Total:</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
