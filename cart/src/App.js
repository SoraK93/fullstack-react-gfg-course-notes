import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/productdetails/:productId" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
