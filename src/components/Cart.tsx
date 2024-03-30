import { useState } from "react";
import { useCart } from "../context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const { REDUCER_ACTIONS, dispatch, cart, totalItems, totalPrice } = useCart();
  const [confirm, setConfirm] = useState(false);

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  if (confirm) return <h2>Thank you for your order</h2>;

  return (
    <main className="main main--cart">
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => (
          <CartItem
            item={item}
            key={item.sku}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className="cart__submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </main>
  );
};

export default Cart;
