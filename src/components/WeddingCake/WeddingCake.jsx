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
        id={cakeItem.id}
      >
        <LazyLoadImage
          alt={cakeItem.alt_Name}
          src={cakeItem.image}
          effect="blur"
        />
        <div className="price">
          <span className="rupees">
            {cakeItem.item}
            <br />₹ {cakeItem.price}
          </span>
        </div>
      </Link>
    </>
  );
}

export default WeddingCake;
