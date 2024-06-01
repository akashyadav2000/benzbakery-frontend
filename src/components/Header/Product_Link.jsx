import React from "react";
import { Link, NavLink } from "react-router-dom";

const Product_Link = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/Cake"} className={({ isActive }) =>
          isActive ? "active-link" : "inactive-link"
        }>Cakes</NavLink>
      </li>
      <li>
        <NavLink to={"/Pastry"} className={({ isActive }) =>
          isActive ? "active-link" : "inactive-link"
        }>Pastrys</NavLink>
      </li>
      <li>
        <NavLink to={"/CupCake"} className={({ isActive }) =>
          isActive ? "active-link" : "inactive-link"
        }>Cup Cakes</NavLink>
      </li>
      <li>
        <NavLink to={"/WeddingCake"} className={({ isActive }) =>
          isActive ? "active-link" : "inactive-link"
        }>Wedding Cakes</NavLink>
      </li>
    </ul>
  );
};

export default Product_Link;
