import "./App.css";
import HomePage from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Products from "./pages/Products";
import MainNavigation from "./components/MainNavigation";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
// Sử dụng 1 mảng các objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // error
    errorElement: <Error />,
    // nested route
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <RootLayout />,
    // error
    errorElement: <Error />,
    // nested route
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

// Sử dụng jsx code với các Route lồng nhau
// const defineRoutes = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );

// const router2 = createBrowserRouter(defineRoutes);

function App() {
  return (
    <>
      {/* <MainNavigation /> */}
      {/* error because when we use the Link tag, the component it belongs to should be a child of RouterProvider */}

      <RouterProvider router={router} />
      {/* <RouterProvider router={router2} /> */}
    </>
  );
}

export default App;
