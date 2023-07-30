import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">Expert Beats</p>
      {/* <Link href="/"> Glasses</Link>
      <Link href="/"> Contact Lenses</Link>
      <Link href="/"> Eye Health</Link>
      <button className="book-apt"> Book Eye Test</button>
      <Link href="/"> </Link> */}

      {/* </p> */}

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default navbar;
