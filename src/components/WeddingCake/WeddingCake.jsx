import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cocktailActions } from "../Store/cocktailSlice";

function WeddingCake({ weddingCakeItem }) {
  const dispatch = useDispatch();

  const handleAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(weddingCakeItem.id));
  };

  return (
    <>
      <Link
        to="/Cocktail"
        onClick={handleAddCocktail}
        className="wed-cake-col"
        id={weddingCakeItem.id}
      >
        <LazyLoadImage
          alt={weddingCakeItem.alt_Name}
          src={weddingCakeItem.image}
          effect="blur"
        />
        <div className="price">
          <span className="rupees">
            {weddingCakeItem.item}
            <br />₹ {weddingCakeItem.price}
          </span>
        </div>
      </Link>
    </>
  );
}

export default WeddingCake;
