import { ProductType } from "../context/ProductProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement } from "react";

type propsType = {
  product: ProductType;
  productInCart: boolean;
  quantity: number | undefined;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const Product = ({
  product,
  productInCart,
  dispatch,
  REDUCER_ACTIONS,
  quantity,
}: propsType): ReactElement => {
  const addToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = productInCart ? "Item in Cart" : null;

  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  return (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <div>{product.price}</div>
      {productInCart && (
        <div>
          {quantity} {itemInCart}
        </div>
      )}
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );
};

export default Product;
