import React from "react";
import PastryContainer from "../Pastry/PastryContainer";
import WeddingCakeContainer from "../WeddingCake/WeddingCakeContainer";
import CakeContainer from "../Cake/CakeContainer";
import CupCakeContainer from "../CupCake/CupCakeContainer";

function Product() {
  return (
    <>
      <div className="product-div">
        <CakeContainer />
        <PastryContainer />
        <CupCakeContainer />
        <WeddingCakeContainer />
      </div>
    </>
  );
}

export default Product;
