import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cocktailActions } from "../Store/cocktailSlice";

function CupCake({ cupCakeItem }) {
  const dispatch = useDispatch();

  const handleAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(cupCakeItem.id));
  };

  return (
    <>
      <Link
        to="/Cocktail"
        onClick={handleAddCocktail}
        className="cake-col"
        id={cupCakeItem.id}
      >
        <LazyLoadImage
          alt={cupCakeItem.alt_Name}
          src={cupCakeItem.image}
          effect="blur"
        />
        <div className="price">
          <span className="rupees">
            {cupCakeItem.item}
            <br />₹ {cupCakeItem.price}
          </span>
        </div>
      </Link>
    </>
  );
}

export default CupCake;
