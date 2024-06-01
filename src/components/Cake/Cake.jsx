import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cocktailActions } from "../Store/cocktailSlice";

function Cake({ cakeItem }) {
  const dispatch = useDispatch();

  const handldeAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(cakeItem.id));
  };

  return (
    <>
      <div className="cake-col" id={cakeItem.id}>
        <LazyLoadImage
          alt={cakeItem.alt_Name}
          src={cakeItem.image}
          effect="blur"
        />
        <div className="price">
          <Link
            to={"/Cocktail"}
            onClick={handldeAddCocktail}
            className="rupees"
          >
            {cakeItem.item}
            <br />₹ {cakeItem.price}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cake;
