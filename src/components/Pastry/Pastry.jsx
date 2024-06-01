import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cocktailActions } from "../Store/cocktailSlice";

function Pastry({ pastryItem }) {
  const dispatch = useDispatch();

  const handldeAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(pastryItem.id));
  };

  return (
    <>
      <div className="cake-col" id={pastryItem.id}>
        <LazyLoadImage src={pastryItem.image} alt={pastryItem.alt_Name} effect="blur"
        />
        <div className="price">
          <Link
            to={"/Cocktail"}
            onClick={handldeAddCocktail}
            className="rupees"
          >
            {pastryItem.item}
            <br />₹ {pastryItem.price}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pastry;
