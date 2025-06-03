import { useState } from "react";

const allBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "adiddas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "fila" },
  { id: "5", brandName: "reebok" },
];

function BrandFilter() {
  const [brands, setBrands] = useState(allBrands);

  const onSearchChange = (e) => {
    const value = e.target.value;
    const filteredBrands =
      value?.length > 0
        ? brands.filter((brand) =>
            brand.brandName.includes(value?.toLowerCase())
          )
        : allBrands;
    setBrands(filteredBrands);
  };

  return (
    <>
      <h1>Brand Filter LESSON</h1>
      <input onChange={onSearchChange} placeholder="search a brand" />
      <ul>
        {brands.map((brands) => (
          <li>{brands.brandName}</li>
        ))}
      </ul>
    </>
  );
}

export default BrandFilter;
