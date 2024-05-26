import React from "react";
import WeddingCake from "./WeddingCake";
import { useSelector } from "react-redux";

function WeddingCakeContainer() {
  const items = useSelector((store) => store.weddingCakeItems);
  return (
    <>
      {/* <div className="" id="wedding-cakes">
        <span className="white"></span> */}
      <div
        className="product-4-wedding-cakes"
        id="wedding-cakes"
      >
        <span className="white"></span>
        <h1 className="title w-title">
          Our Most Popular <span>Wedding Cakes</span>
        </h1>
        <div className="wed-cake-row" id="main_wedding_cakes">
          {items.map((weddingCakeElement) => (
            <WeddingCake
              key={weddingCakeElement.id}
              weddingCakeItem={weddingCakeElement}
            />
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default WeddingCakeContainer;
