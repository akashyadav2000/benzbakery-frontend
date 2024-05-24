import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        {/* <h1 className="about-title">About Us</h1> */}

        <img src="./Images/about-background.jpg" alt="about-background" className="about-photo" />

        <img src="" className="mobile-bg" alt="about-mobile-photo" />

        <div className="about_details">
          <p>
            Our story begins with a love of cooking and a desire to share that love with our community. Today benz Bakery is a symbol of integrity.
          </p>
          <p>
            Step into our world of flour, sugar, and everything nice. At Benz
            bakery, we believe in the magic of freshly baked goods and the joy
            they bring.
          </p>
          <p>
            At Benz bakery, baking isn't just a job,it's our passion. Every dessert is a testament to our commitment to quality and taste.
          </p>
        </div>
      </div>


      <section className="value" id="product" style={{ padding: "0px 5%" }}>
        <h1 className="value-title">Our Value</h1>
        <div className="v-row">
          <div className="v-cell">
            <img
              src="./Images/Recipes.png"
              alt="Recipes"
            />
            <div className="cake-star"></div>
            <h2>AUTHENTIC RECIPES</h2>
            <p>
              Baked with traditional recipes, fresh ingredients, no preservatives and no chemicals.
            </p>
          </div>

          <div className="v-cell">
            <img
              src="./Images/love.png"
              alt="baked with love"
            />
            <h2>BAKED WITH LOVE</h2>
            <p>
              Our passion for baking is poured into every recipe, serving smiles
              on a plate everyday.
            </p>
          </div>

          <div className="v-cell">
            <img src="./Images/Price.png" alt="Best Price" />
            <h2>HONESTLY PRICED</h2>
            <p>
              We constantly offer the best products at the right
              prices, because we believe in honest pricing.
            </p>
          </div>

          <div className="v-cell">
            <img src="./Images/q.png" alt="Quality Products" />
            <h2> BEST IN QUALITYS</h2>
            <p>
              From our ingredients to our kitchen operations & services,
              we always prioritize quality.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
