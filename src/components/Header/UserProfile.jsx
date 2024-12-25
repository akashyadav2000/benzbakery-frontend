import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../Store/authSlice";
import axios from "axios";

const UserProfile = ({ showUserInfo, setShowUserInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const handleLogout = () => {
    dispatch(logout());
    setShowUserInfo(false);
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchPurchaseHistory();
    }
  }, [isAuthenticated, user]);

  const fetchPurchaseHistory = async () => {
    try {
      const response = await axios.get(`https://your-backend-url.com/purchase-history/${user.id}`);
      setPurchaseHistory(response.data);
    } catch (error) {
      console.error("Error fetching purchase history:", error);
    }
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
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>

        <div className="purchase-history">
          <h3>Purchase History</h3>
          {purchaseHistory.length === 0 ? (
            <p>No purchase history available.</p>
          ) : (
            <ul>
              {purchaseHistory.map((purchase) => (
                <li key={purchase._id}>
                  <p>Date: {new Date(purchase.date).toLocaleDateString()}</p>
                  <p>Total Amount: ₹{purchase.totalAmount}</p>
                  <ul>
                    {purchase.items.map((item, index) => (
                      <li key={index}>
                        <p>Name: {item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ₹{item.price}</p>
                        <p>Total Price: ₹{item.totalPrice}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
