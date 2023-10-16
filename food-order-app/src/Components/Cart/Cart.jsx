import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Tokboki", amount: 3, price: 15.99 },
  ];
  const cartItemsJSX = (
    <ul className="list-none m-0 p-0">
      {cartItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <>
      <Modal onShowCart={props.onShowCart}>
        {cartItemsJSX}
        <div className="flex justify-between items-center font-bold text-2xl mx-4 mt-2">
          <span>Total Amount</span>
          <span>$35.62</span>
        </div>
        <div className="text-right mt-2">
          <button
            className="text-[#8a2b06] border-2 border-solid border-[#8a2b06] rounded-3xl px-8 py-2"
            onClick={() => props.onShowCart(false)}
          >
            Close
          </button>
          <button
            className=" cursor-pointer bg-[#8a2b06] border-2 border-solid border-[#8a2b06] px-8 py-2 rounded-3xl ml-4  text-white
          hover:bg-[#5a1a01] hover:border-[#5a1a01] 
          active:bg-[#5a1a01] active:border-[#5a1a01] "
          >
            Order
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Cart;
