import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../Store/authSlice";

const UserProfile = ({ showUserInfo, setShowUserInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const orders = useSelector((state) => state.orders || []);
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
          <span className="hello-user">Welcome, {user?.name || "Guest"}</span>
        </div>
        <p>Name: {user?.name || "N/A"}</p>
        <p>Email: {user?.email || "N/A"}</p>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="user-orders">
        <h3>Order History</h3>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="order-card">
              <p><strong>Order ID:</strong> {order.orderId}</p>
              <p><strong>Total Price:</strong> ₹{order.total}</p>
              <h4>Items:</h4>
              <ul>
                {order.items?.map((item, i) => (
                  <li key={i}>
                    {item.name} - {item.quantity} x ₹{item.price}
                  </li>
                )) || <li>No items in this order.</li>}
              </ul>
            </div>
          ))
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
