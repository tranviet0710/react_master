import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>Home page</h1>
      <p>
        {/* Dùng thẻ a */}
        {/* Go the <a href="/products">the products page</a> */}
        {/* Dùng Link */}
        Go the <Link to="/products">the products page</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
};
export default HomePage;
