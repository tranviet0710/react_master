const Rate = (props) => {
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
          name="taxRate"
          placeholder="0.0"
          min="0.00"
          step="0.01"
          max="100.00"
          type="number"
          className="w-full border bg-white px-5"
          value=""
          onChange={() => {}}
        ></input>
        <span className="border p-3 bg-gray-50 -ml-3">%</span>
      </div>
    </div>
  );
};
export default Rate;
