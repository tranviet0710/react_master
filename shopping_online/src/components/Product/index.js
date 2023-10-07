import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";

export default function Product(props) {
  const { isLoggedIn } = useContext(AuthContext);
  const addToCartHandler = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      props.updateModal();
    } else {
      alert("Added to cart!");
    }
  };
  return (
    <div className="rounded bg-white m-5 shadow-2xl	p-5">
      <div className="flex justify-between mb-2">
        <div>{props.product.rating}/5</div>
        <div className="bg-green-400 rounded-full py-1 px-5">
          {props.product.category}
        </div>
      </div>
      <div>
        <div className="mb-2 flex justify-center">
          <img
            className="rounded-2xl w-48 h-48 object-fill"
            src={props.product.images[0]}
            alt="product"
          />
        </div>
        <div>
          <div className="font-bold mb-2">{props.product.title}</div>
          <div style={{ height: 100 }} className="mb-4">
            {props.product.description}
          </div>
          <div className="text-blue-400 font-bold mb-4">
            Price ${props.product.price}
          </div>
          <div className="flex mb-4">
            <div className="bg-red-700 rounded-xl py-1 px-5 ">
              <p>{props.product.brand}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="border-green-300 border-2 border-[#388614] border-solid py-2 px-7 rounded-xl"
              onClick={addToCartHandler}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
