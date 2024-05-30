import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Display.css";

function Display() {
  return (
    <>
      <div id="home" className="home">
        <div className="home-discription">
          <h1>Every Flavor Has A Story</h1>
          <p>
            Blending Tradition with Innovation, My Passion for the Art of Baking
          </p>
          <div className="home-btn">
            <Link to={"/Product"} className="slogan">
              Book Now
              <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
