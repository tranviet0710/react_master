import CartContext from "./CartContext";

const CartProvider = (props) => {
  const value = {
    items: [],
    totalAmount: 0,
    removeItem: (id) => {},
    addItem: (item) => {},
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
export default CartProvider;
