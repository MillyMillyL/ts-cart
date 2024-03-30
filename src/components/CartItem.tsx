import { ChangeEvent } from "react";
import {
  CartItemType,
  ReducerActionType,
  ReducerAction,
} from "../context/CartProvider";

type propsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartItem = ({ item, dispatch, REDUCER_ACTIONS }: propsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;
  const itemTotal: number = item.qty * item.price;
  const hightestQty: number = 20 > item.qty ? 20 : item.qty;
  const optionValues: number[] = [...Array(hightestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={val} value={val}>
        {val}
      </option>
    );
  });

  const onQtyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveItem = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  };
  return (
    <li className="cart__item">
      <img src={img} className="cart__img" alt={item.name} />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price per item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={onQtyChange}
      >
        {options}
      </select>
      <div aria-label="Item total" className="cart__item-subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(itemTotal)}
      </div>
      <button
        onClick={onRemoveItem}
        className="cart__button"
        aria-label="Remove Item from Cart"
        title="Remove Item from Cart"
      >
        X
      </button>
    </li>
  );
};

export default CartItem;
