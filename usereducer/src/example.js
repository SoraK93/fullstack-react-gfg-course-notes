import "./App.css";
import { useReducer, useState } from "react";
import { filterReducer } from "./useReducer/filterReducer";

function Example() {
  const initialState = {
    price: "",
    discount: "",
    rating: "",
  };

  const [{ price, discount, rating }, filterDispatch] = useReducer(
    filterReducer,
    initialState
  );

  const handlePriceChange = (e) => {
    filterDispatch({
      type: "PRICE",
      payload: e.target.value,
    });
  };
  const handleDiscountChange = (e) => {
    filterDispatch({
      type: "DISCOUNT",
      payload: e.target.value,
    });
  };
  const handleRatingChange = (e) => {
    filterDispatch({
      type: "RATING",
      payload: e.target.value,
    });
  };

  const filteredByPrice =
    price > 0 ? products.filter(({ newPrice }) => newPrice <= price) : products;
  const filterByDiscount =
    discount > 0
      ? filteredByPrice.filter(({ product }) => product.discount >= discount)
      : filteredByPrice;
  const filterByRating =
    rating > 0
      ? filterByDiscount.filter(({ product }) => product.rating >= rating)
      : filterByDiscount;

  return (
    <>
      <h1>Products</h1>
      <div>
        <span>Filters</span>
        <input onChange={handlePriceChange} placeholder="set price limit" />
        <input onChange={handleDiscountChange} placeholder="set discount" />
        <input onChange={handleRatingChange} placeholder="set rating" />
      </div>
      <div>
        {filterByRating?.length > 0 &&
          filterByRating.map((product) => (
            <div>
              <div>
                <p>{product.name}</p>
              </div>
              <div>
                <p>Price - {product.newPrice} || </p>
                <p>Rating - {product.rating} || </p>
                <p>Discount - {product.discount}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Example;
