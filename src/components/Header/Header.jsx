import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Product_AnchorLink from "./Product_AnchorLink";
import Product_Link from "./Product_Link";
import { logout, selectIsAuthenticated, selectUser } from "../Store/authSlice";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHomePage = location.pathname === "/";

  const cart = useSelector((store) => store.cart);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const [showUserInfo, setShowUserInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setShowUserInfo(false);
  }, [location]);

  function toggleMobileMenu(menu) {
    setMenuOpen(!menuOpen);
    setShowUserInfo(false); //"user-info" div closes when the "hamburger-icon" is clicked, 
    menu.classList.toggle("open");
  }

  function closeMobileMenu() {
    setMenuOpen(false);
    const menu = document.getElementById("hamburger-icon");
    if (menu) {
      menu.classList.remove("open");
    }
  }

  const handleCartClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (isAuthenticated) {
      navigate("/Cart");
    } else {
      navigate("/Login");
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (isAuthenticated) {
      setShowUserInfo(!showUserInfo);
    } else {
      navigate("/Login");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowUserInfo(false);
    navigate("/Login");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  const ProductNavigation = (
    <>
      <Link to={"/Product"}>Product</Link>
      {isHomePage ? <Product_AnchorLink /> : <Product_Link />}
    </>
  );

  return (
    <>
      <header>
        <Link to={"/"} className="logo" aria-label="benz_logo" onClick={handleScrollToTop}>
          <img src="./Images/Benz_Logo.png" alt="benz_logo" />
        </Link>

        <nav className="navigate">
          <ul>
            <li>
              <NavLink to={"/"} onClick={handleScrollToTop}>Home</NavLink>
            </li>
            <li>{ProductNavigation}</li>
            <li>
              <NavLink to={"About"}>About</NavLink>
            </li>
            <li>
              <Link to={"Feedback"}>Feedback</Link>
            </li>
          </ul>
        </nav>

        <div className="user-cart">
          <Link
            to={"Cart"}
            onClick={handleCartClick}
            className="Link"
            aria-label="cart_btn"
          >
            <img src="./Images/cart-icon.png" className="cart" alt="cart_img" />
            <span className="cart-count">{cart.length}</span>
          </Link>
          <Link
            to={"Login"}
            onClick={handleLoginClick}
            className="Link"
            aria-label="login_btn"
          >
            <img
              src="./Images/login-icon.png"
              className="login"
              alt="login_img"
            />
          </Link>
        </div>

        <div
          id="hamburger-icon"
          onClick={(e) => toggleMobileMenu(e.currentTarget)}
          className={menuOpen ? "open" : ""}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>

          <ul className="mobile-menu">
            <li>
              <Link to={"/"} onClick={handleScrollToTop}>Home</Link>
            </li>
            <li>
              <Link to={"Product"} className="drop-down">Product</Link>
            </li>

            <li>
              <Link to={"Cake"} className="drop-down">Cakes</Link>
            </li>
            <li>
              <Link to={"Pastry"} className="drop-down">Pastrys</Link>
            </li>
            <li>
              <Link to={"CupCake"} className="drop-down">Cup Cakes</Link>
            </li>
            <li>
              <Link to={"WeddingCake"} className="drop-down">Wedding Cakes</Link>
            </li>

            <li>
              <NavLink to={"About"}>About</NavLink>
            </li>
            <li>
              <Link to={"Feedback"}>Feedback</Link>
            </li>

          </ul>
        </div>
      </header >

      {isAuthenticated && showUserInfo && (
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
          </div>
        </div>
      )
      }
    </>
  );
}

export default Header;
