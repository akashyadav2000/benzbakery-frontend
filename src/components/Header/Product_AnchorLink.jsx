import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Product_AnchorLink = () => {
  return (
    <ul>
      <li>
        <AnchorLink href="#cakes">Cakes</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#pastrys">Pastrys</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#cup-cakes">Cup Cakes</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#wedding-cakes">Wedding Cakes</AnchorLink>
      </li>
    </ul>
  );
};

export default Product_AnchorLink;
