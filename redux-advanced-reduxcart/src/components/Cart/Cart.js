import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { hideNotification } from "../../store/ui";
import { fetchCart, sendCartData } from "../../store/cart";
let isInitialize = true;
const Cart = (props) => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);

  // fetch cart data
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // update cart data when changes
  useEffect(() => {
    if (isInitialize) {
      isInitialize = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
    // Hide notification after 3 seconds if it's still visible
    setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
  }, [cart, dispatch]);

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
