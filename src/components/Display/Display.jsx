import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Display.css";

function Display() {
  return (
    <>
      <section id="home" className="home">
        <h1>Every Flavor Has A Story</h1>
        <p>
          Love is like a cake, you have to cook it well
          <br />
          to be able to savor it.
        </p>
        <div className="home-btn">
          <Link to={"/Cart"} className="slogan">
            Book Now
            <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Display;
