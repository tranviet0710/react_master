import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className="cursor-pointer text-inherit border-0 bg-[#4d1601] text-white px-6 py-2 flex justify-around items-center rounded-3xl font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00]">
      <span className="w-5 h-5 mr-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] px-3 py-1 font-bold ml-4 rounded-3xl">
        3
      </span>
    </button>
  );
};
export default HeaderCartButton;
