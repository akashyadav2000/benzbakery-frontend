import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { cocktailActions } from "../Store/cocktailSlice";

function WeddingCake({ weddingCakeItem }) {
  const dispatch = useDispatch();

  const handldeAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(weddingCakeItem.id));
  };

  return (
    <>
      <div className="wed-cake-col" id={weddingCakeItem.id}>
        <img src={weddingCakeItem.image} alt={weddingCakeItem.alt_Name} />
        <div className="price">
          <Link
            to={"/Cocktail"}
            onClick={handldeAddCocktail}
            className="rupees"
          >
            {weddingCakeItem.item}
            <br />₹ {weddingCakeItem.price}
          </Link>
        </div>
      </div>
    </>
  );
}

export default WeddingCake;
