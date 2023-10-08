import Pagination from "../Pagination";
import Product from "../Product";
import Slide from "../Slide";
export const HomePage = (props) => {
  const products = props.products;
  return (
    <>
      <Slide />

      {/* <div className="grid grid-cols-3"> */}
      <Pagination
        itemsPerPage={9}
        products={products}
        updateModal={props.updateModal}
        updateCart={props.updateCart}
      />
      {/* {products &&
          products.map((product, index) => (
            <Product
              key={index}
              product={product}
              updateModal={props.updateModal}
              updateCart={props.updateCart}
            />
          ))} */}
      {/* </div> */}
    </>
  );
};
