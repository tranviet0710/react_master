import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-center items-center px-0 py-0.5 z-10">
        <div className="w-4/5 flex justify-between items-center">
          <h1 className="font-bold text-2xl">ReactMeals</h1>
          <HeaderCartButton />
        </div>
      </header>
      <div className="w-100 h-96 z-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
};
export default Header;
