import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cocktailActions } from "../Store/cocktailSlice";

function Pastry({ pastryItem }) {
  const dispatch = useDispatch();

  const handleAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(pastryItem.id));
  };

  return (
    <>
      <Link
        to="/Cocktail"
        onClick={handleAddCocktail}
        className="cake-col"
        id={pastryItem.id}
      >
        <LazyLoadImage
          alt={pastryItem.alt_Name}
          src={pastryItem.image}
          effect="blur"
        />
        <div className="price">
          <span className="rupees">
            {pastryItem.item}
            <br />₹ {pastryItem.price}
          </span>
        </div>
      </Link>
    </>
  );
}

export default Pastry;
