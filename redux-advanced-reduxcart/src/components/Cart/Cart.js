import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { hideNotification, showNotification } from "../../store/ui";
let isInitialize = true;
const Cart = (props) => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (isInitialize) {
      isInitialize = false;
      return;
    }

    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://redux-cart-64aad-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }
      dispatch(
        showNotification({
          status: "success",
          title: "Success...",
          message: "Send cart data successfully",
        })
      );
    };

    sendCartData().catch((err) => {
      dispatch(
        showNotification({
          status: "error",
          title: "Error...",
          message: "Failed to send cart data: " + err.message,
        })
      );
    });

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
