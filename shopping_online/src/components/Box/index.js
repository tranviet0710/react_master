import React from "react";
import classes from "./Box.module.css";
export default function Box(props) {
  const number = props.numberOfProducts;
  return (
    <div className="fixed bottom-16 right-16 w-10 h-10">
      {number > 0 ? (
        <button className="bg-white p-10 rounded-full shadow-2xl">
          <img
            src="image/Cart.png"
            style={{
              position: "absolute",
              right: "-18px",
              bottom: "-24px",
            }}
          ></img>
          <i className={`px-2 py-1 ${classes["badge"]}`}>
            {props.numberOfProducts}
          </i>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
