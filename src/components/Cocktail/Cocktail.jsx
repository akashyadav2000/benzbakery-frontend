import React from "react";
import {
  faAngleRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cocktail.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "../Store/authSlice";

function Cocktail({ item }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(cartActions.addToCart(item.id));
      navigate("/Cart");
    } else {
      navigate("/Login");
    }
  };

  return (
    <>
      <main className="cocktail-bg" id={item.id}>
        <div className="content-wrapper">
          <div className="pro-col">
            <img src={item.image} id="pro_details_img" />
          </div>

          <main className="product-details">
            <div className="cake-name">
              <span>{item.item}</span>
            </div>

            <div>
              <span>{item.cakeD}</span>
            </div>

            <div className="cake-ingredients">
              <span>Ingredient</span>
            </div>

            <div>
              {" "}
              <span>{item.ingredient}</span>
            </div>

            <div className="add-to-cart">
              <Link
                id="link-button"
                onClick={handleAddToCart}
                className="cart-btn"
              >
                Add to cart
                <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
              </Link>

              <span className="rs">
                <FontAwesomeIcon icon={faIndianRupeeSign} /> {item.price}
              </span>
            </div>
          </main>
        </div>
      </main>
      <span className="cocktail-white"></span>
    </>
  );
}

export default Cocktail;
