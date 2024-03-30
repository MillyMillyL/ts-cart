import { useState } from "react";
import { useCart } from "./context/CartProvider";
import { useProducts } from "./context/ProductProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const { products } = useProducts();
  const { cart } = useCart();
  console.log(products, cart);

  const [viewCart, setViewCart] = useState(false);

  const content = viewCart ? <Cart /> : <ProductList />;

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {content}
      <Footer viewCart={viewCart} />
    </>
  );
}

export default App;
