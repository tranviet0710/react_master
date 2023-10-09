import { useContext } from "react";
import ItemContext from "../../store/ItemContext";

const Rate = (props) => {
  const { tax, setTax, discount, setDiscount } = useContext(ItemContext);
  const update = (event) => {
    if (event.target.name === "tax") {
      setTax(event.target.value);
    } else {
      setDiscount(event.target.value);
    }
  };
  return (
    <div className="my-4">
      <label
        htmlFor="tax"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.text}:
      </label>
      <div className="flex items-stretch">
        <input
          // value={props.name === "tax" ? tax : discount}
          name={props.name}
          placeholder="0.0"
          min="0.00"
          step="0.01"
          max="100.00"
          type="number"
          className="w-full border bg-white px-5"
          onChange={update}
        ></input>
        <span className="border p-3 bg-gray-50 -ml-3">%</span>
      </div>
    </div>
  );
};
export default Rate;
