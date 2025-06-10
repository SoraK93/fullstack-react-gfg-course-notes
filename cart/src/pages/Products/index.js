import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductsCard";
import { products } from "../../db/products";

export const Products = () => {
  return (
    <div className="App">
      <Navbar className="app" />
      <h1 className="app">Products</h1>
      <div className="flex gap-16px app">
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};
