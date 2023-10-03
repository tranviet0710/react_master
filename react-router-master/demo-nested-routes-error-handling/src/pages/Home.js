import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>
        {/* Dùng thẻ a */}
        {/* Go the <a href="/products">the products page</a> */}
        {/* Dùng Link */}
        Go the <Link to="/products">the products page</Link>
      </p>
    </>
  );
};
export default HomePage;
