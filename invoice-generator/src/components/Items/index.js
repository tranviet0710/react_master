import { useContext, useEffect } from "react";
import Item from "../Item";
import ItemContext from "../../store/ItemContext";
import { roundNumber } from "../../utils/Utils";
import FormContext from "../../store/FormContext";
import Devision from "../Devision";
const Items = (props) => {
  const { items, addItem, tax, discount, money, updateMoney } =
    useContext(ItemContext);
  const { selectedCurrency } = useContext(FormContext);
  const getSubTotalPrice = () => {
    const price = items.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
    return price;
  };
  const getTax = () => {
    const taxMoney = (tax * getSubTotalPrice()) / 100;
    return taxMoney;
  };

  const getDiscount = () => {
    const discountMoney = (discount * getSubTotalPrice()) / 100;
    return discountMoney;
  };
  const getTotalPrice = () => {
    const total = getSubTotalPrice() + getTax() - getDiscount();
    return total;
  };

  useEffect(() => {
    updateMoney({
      subTotal: roundNumber(getSubTotalPrice()),
      tax: roundNumber(getTax()),
      discount: roundNumber(getDiscount()),
      total: roundNumber(getTotalPrice()),
    });
  }, [items, tax, discount]);

  return (
    <>
      <table className="w-full">
        <thead className="text-left">
          <tr className="border-b">
            <th className="pb-2">ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => {
            return (
              <Item
                key={index}
                id={index}
                name={item.name}
                desc={item.desc}
                qty={item.qty}
                price={item.price}
              />
            );
          })}
        </tbody>
      </table>
      <button
        onClick={addItem}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2"
      >
        Add item
      </button>
      <div className="w-full mt-4 flex flex-col items-end">
        <div className=" w-1/2 flex justify-between mb-2">
          <h1 className="font-bold">Subtotal: </h1>
          <span>
            {selectedCurrency} {money.subTotal}
          </span>
        </div>
        <div className=" w-1/2  flex justify-between mb-2">
          <h1 className="font-bold">Discount</h1>
          <span>
            ({discount}%) {selectedCurrency} {money.discount}
          </span>
        </div>
        <div className="w-1/2  flex justify-between mb-2 ">
          <h1 className="font-bold">Tax:</h1>
          <span>
            ({tax}%) {selectedCurrency} {money.tax}
          </span>
        </div>
        <div className="w-1/2  ">
          <hr className="m-3"></hr>
        </div>
        <div className="w-1/2 flex justify-between mb-2 text-xl font-bold">
          <h1 className="">Total:</h1>
          <h1>
            {selectedCurrency} {money.total}
          </h1>
        </div>
      </div>
    </>
  );
};
export default Items;
