import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cocktailActions } from "../Store/cocktailSlice";

function CupCake({ cupCakeItem }) {
  const dispatch = useDispatch();

  const handldeAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(cupCakeItem.id));
  };

  return (
    <>
      <div className="cake-col" id={cupCakeItem.id}>
        <img src={cupCakeItem.image} alt={cupCakeItem.alt_Name} />
        <div className="price">
          <Link
            to={"/Cocktail"}
            onClick={handldeAddCocktail}
            className="rupees"
          >
            {cupCakeItem.item}
            <br />₹ {cupCakeItem.price}
          </Link>
        </div>
      </div>
    </>
  );
}

export default CupCake;
