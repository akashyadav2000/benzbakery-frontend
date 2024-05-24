import React from "react";
import { Link } from "react-router-dom";

const Product_Link = () => {
  return (
    <ul>
      <li>
        <Link to={"/Cake"}>Cakes</Link>
      </li>
      <li>
        <Link to={"/Pastry"}>Pastrys</Link>
      </li>
      <li>
        <Link to={"/CupCake"}>Cup Cakes</Link>
      </li>
      <li>
        <Link to={"/WeddingCake"}>Wedding Cakes</Link>
      </li>
    </ul>
  );
};

export default Product_Link;
