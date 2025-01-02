import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, selectPurchaseHistory } from "../Store/authSlice";


const UserProfile = ({ showUserInfo, setShowUserInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const purchaseHistory = useSelector(selectPurchaseHistory);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    setShowUserInfo(false);
  };

  if (!isAuthenticated || !showUserInfo) return null;

  return (
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

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
