import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cocktailActions } from "../Store/cocktailSlice";

function Cake({ cakeItem }) {
  const dispatch = useDispatch();

  const handldeAddCocktail = () => {
    dispatch(cocktailActions.addToCocktail(cakeItem.id));
  };

  return (
    <>
      <div className="cake-col" id={cakeItem.id}>
        <img src={cakeItem.image} alt={cakeItem.alt_Name} />
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
