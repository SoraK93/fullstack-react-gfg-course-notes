import { useCart } from "../../context/cart-context";

export const Navbar = () => {
  const { cart } = useCart();
  
  return (
    <div className="app">
      <h2>Shopee</h2>
      <p>Cart Count - {cart["cart"].length || 0}</p>
    </div>
  );
};
