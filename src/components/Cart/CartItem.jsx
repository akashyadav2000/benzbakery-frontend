import React from "react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import { useSelector } from "react-redux";

function CartItem({ item }) {
  const itemIds = useSelector((state) => state.cart);

  const itemCount = itemIds.filter((id) => id === item.id).length;

  const totalPrice = item.price * itemCount;

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };

  const handleIncrement = () => {
    if (itemCount < 5) {
      dispatch(cartActions.addToCart(item.id));
    }
  }

  const handleDecrement = () => {
    dispatch(cartActions.removeSingleItem(item.id));
  };

  return (
    <>
      <div className="cart-item-container">
        <div className="cart-left-part">
          <img src={item.image} />

        </div>
        <div className="cart-right-part">
          <div className="cart-cakename">{item.item}</div>
          <span className="cart-cake-details">{item.cakeD}</span>

          <div className="cart-cake-ingredient">Ingredient</div>
          <span className="cart-cake-details cart-cake-details-disable">{item.ingredient}</span>

          <div className="cart-price-container">
            <div className="item-quantity">
              <div className="span">
                <span>Qty : &nbsp;</span>
                <div onClick={handleDecrement}>
                  <FontAwesomeIcon className="plus-minus-icon" icon={faMinus} />
                </div>
                <span className="item-count">{itemCount}</span>
                <div onClick={handleIncrement}>
                  <FontAwesomeIcon className="plus-minus-icon" icon={faPlus} />
                </div>
                <div className="quantity-control">
                  <span className="cart-price-details">₹ {totalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="remove-from-cart" onClick={handleRemoveItem}>
            <FontAwesomeIcon className="item-delete-icon" icon={faTrash} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
