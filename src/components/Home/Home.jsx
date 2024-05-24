import React from "react";
import Display from "../Display/Display";
import Product from "../Product/Product";
// import PastryContainer from '../Pastry/PastryContainer'
// import WeddingCakeContainer from '../WeddingCake/WeddingCakeContainer'
// import CakeContainer from '../Cake/CakeContainer'
// import CupCakeContainer from '../CupCake/CupCakeContainer'

function Home() {
  return (
    <>
      <Display />
      <Product />

      {/* <CakeContainer />
      <PastryContainer />
      <CupCakeContainer />
      <WeddingCakeContainer /> */}
    </>
  );
}

export default Home;
