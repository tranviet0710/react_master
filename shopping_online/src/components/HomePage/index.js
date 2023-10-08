import Product from "../Product";
import Slide from "../Slide";
export const HomePage = (props) => {
  const products = props.products;
  console.log(products);
  return (
    <>
      <Slide />
      <div className="grid grid-cols-3">
        {products &&
          products.map((product, index) => (
            <Product
              key={index}
              product={product}
              updateModal={props.updateModal}
              updateCart={props.updateCart}
            />
          ))}
      </div>
    </>
  );
};
