const InvoiceDate = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-5">
        <p>
          <b>Current Date: </b> 10/5/2023
        </p>
        <p>
          <b>Due date: </b>
          <input type="date" className="bg-gray-100 px-6 py-2"></input>
        </p>
      </div>
      <div className="col-span-3 flex flex-col items-end">
        <p className="">
          <b>Invoice number: </b>
          <input
            name=""
            placeholder="1"
            type="number"
            min="0"
            step="1"
            max="100"
            className="bg-gray-100 w-20 p-2"
          ></input>
        </p>
      </div>
    </div>
  );
};
export default InvoiceDate;
