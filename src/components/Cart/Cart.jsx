import React from 'react'
import CartSummary from './CartSummary'
import CartItem from './CartItem'
import { useSelector } from 'react-redux';

function Cart() {

  const bagItems = useSelector((state) => state.cart);
  const categories = ["cakeItems", "pastryItems", "cupCakeItems", "weddingCakeItems"];

  const finalItems = categories.flatMap(category => {
    const items = useSelector((state) => state[category]);
    return items.filter(item => bagItems.includes(item.id));
  });

  return (
    <main className="cart-container">
      <div className="all-cart-items-container">
        <div className="shopping-title"><span>shopping Cart</span></div>
        {finalItems.map((item) => (
          <CartItem key={item.id} item={item}
          />
        ))}
      </div>
      <CartSummary />
    </main>
  )
}

export default Cart