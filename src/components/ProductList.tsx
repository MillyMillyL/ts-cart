import { useCart } from "../context/CartProvider";
import { useProducts } from "../context/ProductProvider";
import Product from "./Product";

const ProductList = () => {
  const { REDUCER_ACTIONS, dispatch, cart } = useCart();
  const { products } = useProducts();

  const isInCart = (id: string): boolean =>
    cart.some((item) => item.sku === id);

  if (products?.length) {
    return (
      <main className="main main--products">
        {products.map((product) => {
          const productInCart = isInCart(product.sku);
          let quantity: number | undefined;
          if (productInCart)
            quantity = cart.find((item) => item.sku === product.sku)?.qty;
          return (
            <Product
              key={product.sku}
              product={product}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              productInCart={productInCart}
              quantity={quantity}
            />
          );
        })}
      </main>
    );
  }
  return <div>Product List</div>;
};

export default ProductList;
