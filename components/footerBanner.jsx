import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const footerBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>Book Free Trial Today</h3>
          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>Best on the Market</p>
          <h3>100% quality</h3>
          <p class="bottom">{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default footerBanner;
