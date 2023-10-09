import { useContext } from "react";
import FormContext from "../../store/FormContext";

const InvoiceInfo = () => {
  const { invoiceInfo, updateInvoiceInfo } = useContext(FormContext);
  const updateDueDate = (event) => {
    updateInvoiceInfo("dueDate", event.target.value);
  };
  const updateVoiceNumber = (event) => {
    updateInvoiceInfo("number", event.target.value);
  };
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-5">
        <p>
          <b>Current Date: </b> {invoiceInfo.currentDate}
        </p>
        <p className="mt-2">
          <b>Due Date: </b>
          <input
            onChange={updateDueDate}
            value={invoiceInfo.dueDate}
            type="date"
            className="bg-gray-100 px-5 py-2"
            required
          ></input>
        </p>
      </div>
      <div className="col-span-3 flex flex-col items-end">
        <p className="">
          <b>Invoice number: </b>
          <input
            onChange={updateVoiceNumber}
            value={invoiceInfo.number}
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
export default InvoiceInfo;
