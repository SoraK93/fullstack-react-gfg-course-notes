import "./App.css";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { products } from "./db/products";

function App() {
  return (
    <div className="App">
      <Navbar className="app" />
      <h1 className="app">Products</h1>
      <div className="flex gap-16px app">
        {products?.length > 0 &&
          products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default App;
