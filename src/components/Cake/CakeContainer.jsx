import React from "react";
import Cake from "./Cake";
import { useSelector } from "react-redux";

function CakeContainer() {
  const items = useSelector((store) => store.cakeItems);
  return (
    <>
      <div className="" id="cakes">
        <span className="white"></span>
        <section className="product-1-cakes" id="product-1-cakes">
          <h1 className="title">
            Our Most Popular <span>Cakes</span>
          </h1>
          <div className="cake-row" id="main_cake">
            {items.map((cakeElement) => (
              <Cake key={cakeElement.id} cakeItem={cakeElement} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default CakeContainer;
