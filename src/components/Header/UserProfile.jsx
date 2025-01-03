import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, selectPurchaseHistory } from "../Store/authSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const purchaseHistory = useSelector(selectPurchaseHistory);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setShowUserInfo(false);
  };

  const calculateTotalAmount = () => {
    let total = 0;
    purchaseHistory.forEach((purchase) => {
      total += purchase.total;
    });
    return total + 99; // Adding ₹99 as convenience fee
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <button onClick={() => setShowUserInfo((prev) => !prev)}>
        {showUserInfo ? "Hide Profile" : "Show Profile"}
      </button>
      {showUserInfo && (
        <div className="blur-bg">
          <div className="user-info">
            <span className="user-profile-title">User Profile</span>
            <div className="user-profile">
              <img src="./Images/user-logo.png" alt="user-profile" />
              <span className="hello-user">Welcome, {user?.name}</span>
            </div>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>

            <div className="purchase-history">
              <h3>Purchase History</h3>
              {purchaseHistory.length > 0 ? (
                <ul>
                  {purchaseHistory.map((purchase, index) => (
                    <li key={index}>
                      <LazyLoadImage
                        src={purchase.image}
                        alt={purchase.name}
                        effect="blur"
                        className="purchase-image"
                      />
                      <strong>Product:</strong> {purchase.name} |
                      <strong>Quantity:</strong> {purchase.quantity} |
                      <strong>Price:</strong> ₹{purchase.price} |
                      <strong>Total:</strong> ₹{purchase.total}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No purchases yet!</p>
              )}
            </div>

            <div className="overall-total">
              <h3>Overall Total:</h3>
              <p>₹{calculateTotalAmount()}</p>
            </div>

            <div className="convenience-fee">
              <h4>Convenience Fee:</h4>
              <p>₹99</p>
            </div>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
