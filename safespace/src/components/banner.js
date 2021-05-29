import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Tough times never last, </span>
            </div>
            <div className="line">
              <span>but tough people do!</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              Know More About Mental Health <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
