import {useParams} from "react-router-dom";
import { products } from "../../db/products";

export const ProductDetails = () => {
  const params = useParams();

  const currentProduct = products.find(({_id}) => params.productId === _id);
  console.log(currentProduct);

  return (
    <>
    <h1>Product Details</h1>
    {
      <p>{currentProduct.name}</p>
    }
    </>
  );
};
