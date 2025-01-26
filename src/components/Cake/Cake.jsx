import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cocktailActions } from "../Store/cocktailSlice";

function Cake({ cakeItem }) {
  const dispatch = useDispatch();

  const handleAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(cakeItem.id));
  };

  return (
    <>
      <Link
        to="/Cocktail"
        onClick={handleAddCocktail}
        className="cake-col"
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

export default Cake;
