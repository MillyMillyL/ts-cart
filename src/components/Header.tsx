import { useCart } from "../context/CartProvider";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  return (
    <header className="header">
      <div className="header__title-bar">
        <h1>{viewCart ? "Cart" : "Product List"}</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
          <nav className="nav">
            {viewCart ? (
              <button
                onClick={() => {
                  setViewCart(false);
                }}
              >
                View Products
              </button>
            ) : (
              <button onClick={() => setViewCart(true)}>View Cart</button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
