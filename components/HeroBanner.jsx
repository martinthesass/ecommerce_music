import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        {/* <p className="beats-solo">{heroBanner.smallText}</p> */}
        <p className="beats-solo">Turn Up The Sound</p>

        <h3>Because Your Music Matters</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="mainphoto"
          className="hero-banner-image"
        />

        <div className="center-div">
          <Link href={`/product/${heroBanner.product}`}>
            {/* <button type = "button">{heroBanner.buttonText}</button> */}

            <button type="button" className="book-apt-1">
              See Offers Below
            </button>
          </Link>

          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
