import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BrandFilter from "./lessons/brand-filter.js";
import AddToCart from "./lessons/add-to-cart.js";
import WishlistApp from "./lessons/wishlist.js";

const brand_Filter = ReactDOM.createRoot(
  document.getElementById("brand-filter")
);
brand_Filter.render(
  <React.StrictMode>
    <BrandFilter />
  </React.StrictMode>
);

const addToCart = ReactDOM.createRoot(document.getElementById("add-to-cart"));
addToCart.render(
  <React.StrictMode>
    <AddToCart />
  </React.StrictMode>
);

const wishlistApp = ReactDOM.createRoot(
  document.getElementById("wishlist-app")
);
wishlistApp.render(
  <React.StrictMode>
    <WishlistApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
