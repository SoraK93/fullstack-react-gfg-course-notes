import { useCart } from "../../context/cart-context";

export const Products = ({ product }) => {
  const { cartDispatch } = useCart();

  const onAddToCartClick = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const onRemoveFromCartClick = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <div className="flex flex-col border">
      <div>
        <p>{product.name}</p>
      </div>
      <div className="flex gap-8px">
        <p>Price - {product.newPrice} || </p>
        <p>Rating - {product.rating} || </p>
        <p>Discount - {product.discount}</p>
      </div>
      <div>
        <button onClick={onAddToCartClick}>Add To Cart</button>
        <button onClick={onRemoveFromCartClick}>Remove from Cart</button>
      </div>
    </div>
  );
};
