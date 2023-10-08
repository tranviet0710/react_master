import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import { Navigation } from "./components/Navigation";
import { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import Login from "./components/Login";
import "@fontsource/podkova";
import Box from "./components/Box";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [numberOfProducts, setNumberProducts] = useState(0);
  const updateModal = () => {
    console.log("update modal");
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100&skip=0")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  const updateCart = () => {
    setNumberProducts(numberOfProducts + 1);
  };
  return (
    <>
      <div
        className="h-full grid grid-cols-12"
        style={{ fontFamily: "Podkova" }}
      >
        <div className="col-span-3">
          <Navigation updateModal={updateModal} />
        </div>
        <div className="col-span-9">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                  updateModal={updateModal}
                  updateCart={updateCart}
                />
              }
            ></Route>
            <Route
              path="/home"
              element={
                <HomePage
                  products={products}
                  updateModal={updateModal}
                  updateCart={updateCart}
                />
              }
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>

        {showModal ? <Login updateModal={updateModal} /> : null}
      </div>
      <Box numberOfProducts={numberOfProducts} />
    </>
  );
}

export default App;
