import React from "react";
import { useSelector } from "react-redux";
import Pastry from "./Pastry";

function PastrySection() {
  const items = useSelector((store) => store.pastryItems);
  return (
    <>
      {/* <div className="" id="pastrys">
      <span className="white"></span> */}
      <div className="product-2-pastrys" id="pastrys">
        <span className="white"></span>
        <h1 className="title">
          Our Most Popular <span>Pastrys</span>
        </h1>
        <div className="cake-row" id="main_pastry">
          {items.map((pastryElement) => (
            <Pastry key={pastryElement.id} pastryItem={pastryElement} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default PastrySection;
