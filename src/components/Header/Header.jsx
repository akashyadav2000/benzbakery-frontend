import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Product_AnchorLink from "./Product_AnchorLink";
import Product_Link from "./Product_Link";
import UserProfile from "./UserProfile";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const cart = useSelector((store) => store.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMobileMenu(menu) {
    setMenuOpen(!menuOpen);
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
      navigate("/UserProfile");
    } else {
      navigate("/Login");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  const isActiveProductLink = ['/Cake', '/Pastry', '/CupCake', '/WeddingCake'].includes(location.pathname);

  const ProductNavigation = (
    <>
      <NavLink to={"/Product"}
        className={({ isActive }) =>
          isActive || isActiveProductLink ? "active-link" : "inactive-link"
        }
      >
        Product
      </NavLink>
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
              <NavLink to={"/"} onClick={handleScrollToTop}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >Home</NavLink>
            </li>
            <li>{ProductNavigation}</li>
            <li>
              <NavLink to={"About"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >About</NavLink>
            </li>
            <li>
              <NavLink to={"Feedback"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
              >Feedback</NavLink>
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
      </header>

      <UserProfile />
    </>
  );
}

export default Header;
