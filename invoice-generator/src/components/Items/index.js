import { useContext } from "react";
import Item from "../Item";
import ItemContext from "../../store/ItemContext";
const Items = (props) => {
  const { items, addItem } = useContext(ItemContext);
  return (
    <>
      <table className="w-full">
        <thead className="text-left">
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                id={index}
                name={item.name}
                qty={item.qty}
                price={item.price}
              />
            );
          })}
        </tbody>
      </table>
      <button
        onClick={addItem}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Add item
      </button>
      <div className="w-full mt-4 flex flex-col items-end">
        <div className=" w-1/2 flex justify-between mb-2">
          <h1>Subtotal: </h1>
          <span>$1.00</span>
        </div>
        <div className=" w-1/2  flex justify-between mb-2">
          <h1>Discount</h1>
          <span>(0%)$0.00</span>
        </div>
        <div className="w-1/2  flex justify-between mb-2">
          <h1>Tax:</h1>
          <span>(0%)$0.00</span>
        </div>
        <div className="w-1/2  ">
          <hr className="m-3"></hr>
        </div>
        <div className="w-1/2 flex justify-between mb-2">
          <h1>Total:</h1>
          <h1>$1</h1>
        </div>
      </div>
    </>
  );
};
export default Items;
