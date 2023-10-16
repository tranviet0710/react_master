import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
  const { totalAmount } = useContext(CartContext);
  return (
    <button
      onClick={() => props.onShowCart(true)}
      className="animate-bump cursor-pointer text-inherit border-0 bg-[#4d1601] text-white px-6 py-2 flex justify-around items-center rounded-3xl font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00]"
    >
      <span className="w-5 h-5 mr-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] px-3 py-1 font-bold ml-4 rounded-3xl">
        {totalAmount}
      </span>
    </button>
  );
};
export default HeaderCartButton;
