import { useState } from "react";

const allBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "adiddas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "fila" },
  { id: "5", brandName: "reebok" },
];

function AddToCart() {
  const [selectedBrand, setSelectedBrand] = useState([]);

  const onAddToCartClick = (id) => {
    const selectedItem = allBrands.find((item) => item.id === id);
    setSelectedBrand([...selectedBrand, selectedItem]);
  };

  const onRemoveClick = (id) => {
    const filteredItem = selectedBrand.filter(item => item.id !== id);
    setSelectedBrand(filteredItem);
  };

  return (
    <>
      <h1>ADD TO CART LESSON</h1>
      <div>
        <p>Add Brand to your Cart</p>
        {allBrands.map((brand) => (
          <div>
            <span>{brand.brandName}</span>
            <button onClick={() => onAddToCartClick(brand.id)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <p>Your Cart</p>
        {selectedBrand.map((brand) => (
          <p>{brand.brandName} - <button onClick={() => onRemoveClick(brand.id)}>Remove</button></p>
        ))}
      </div>
    </>
  );
}

export default AddToCart;
