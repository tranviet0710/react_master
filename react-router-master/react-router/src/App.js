import "./App.css";
import HomePage from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Products from "./pages/Products";
import MainNavigation from "../../react-router-1/src/components/MainNavigation";

// Sử dụng 1 mảng các objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

// Sử dụng jsx code với các Route lồng nhau
const defineRoutes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/products" element={<Products />}></Route>
  </Route>
);

const router2 = createBrowserRouter(defineRoutes);
function App() {
  return (
    // <RouterProvider router={router} />
    <>
      <RouterProvider router={router2} />
    </>
  );
}

export default App;
