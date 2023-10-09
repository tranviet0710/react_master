import { useContext } from "react";
import FormContext from "../../store/FormContext";

const Currency = () => {
  const { setSelectedCurrency } = useContext(FormContext);
  return (
    <div className="my-4">
      <label
        htmlFor="money"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Currency:
      </label>
      <select
        onChange={(event) => {
          setSelectedCurrency(event.target.value);
        }}
        id="money"
        className="
        text-center
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="$"> USD (United States Dollar) </option>
        <option value="£"> GBP (British Pound Sterling) </option>
        <option value="¥"> JPY (Japanese Yen) </option>
        <option value="$"> CAD (Canadian Dollar) </option>
        <option value="$"> AUD (Australian Dollar) </option>
        <option value="$"> SGD (Signapore Dollar) </option>
        <option value="¥"> CNY (Chinese Renminbi) </option>
        <option value="₿"> BTC (Bitcoin) </option>
      </select>
    </div>
  );
};
export default Currency;
