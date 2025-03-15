import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
let isInitialize = true;
const Cart = (props) => {
  const isVisible = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);
  // const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (isInitialize) {
      isInitialize = false;
      return;
    }
    fetch("https://redux-cart-64aad-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    }).then((response) => {});
  }, [cart]);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {isVisible && (
        <ul>
          {cart.items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
