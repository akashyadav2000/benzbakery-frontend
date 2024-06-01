import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cocktailActions } from "../Store/cocktailSlice";

function WeddingCake({ weddingCakeItem }) {
  const dispatch = useDispatch();

  const handldeAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(weddingCakeItem.id));
  };

  return (
    <>
      <div className="wed-cake-col" id={weddingCakeItem.id}>
        <LazyLoadImage src={weddingCakeItem.image} alt={weddingCakeItem.alt_Name} effect="blur"
        />
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
