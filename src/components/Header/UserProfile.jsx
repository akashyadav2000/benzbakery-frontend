import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, selectPurchaseHistory } from "../Store/authSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./UserProfile.css";
import { useLocation } from "react-router-dom";

const UserDetails = ({ user }) => (
  <div className="user-profile">
    <img src="./Images/user-logo.png" alt="user-profile" />
    <p>Name: {user?.name}</p>
    <p>Email: {user?.email}</p>
  </div>
);

const PurchaseHistory = ({ purchaseHistory }) => (
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
);

const TotalAmount = ({ total }) => (
  <div className="overall-total">
    <h3>Overall Total:</h3>
    <p>₹{total}</p>
  </div>
);

const ConvenienceFee = () => (
  <div className="convenience-fee">
    <h4>Convenience Fee:</h4>
    <p>₹99</p>
  </div>
);

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const purchaseHistory = useSelector(selectPurchaseHistory);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const calculateTotalAmount = () => {
    let total = 0;
    purchaseHistory.forEach((purchase) => {
      total += purchase.total;
    });
    return total + 99; // Add ₹99 as convenience fee
  };

  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }

  const totalAmount = calculateTotalAmount();

  return (
    <div className="full-profile-page">
      <h1>User Profile</h1>
      <UserDetails user={user} />
      <PurchaseHistory purchaseHistory={purchaseHistory} />
      <TotalAmount total={totalAmount} />
      <ConvenienceFee />
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
