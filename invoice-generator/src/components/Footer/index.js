import { useContext } from "react";
import FormContext from "../../store/FormContext";

const Footer = () => {
  const { invoiceInfo, updateInvoiceInfo } = useContext(FormContext);
  return (
    <>
      <h1>Notes:</h1>
      <textarea
        value={invoiceInfo.note}
        onChange={(event) => {
          updateInvoiceInfo("note", event.target.value);
        }}
        id="notes"
        placeholder="Thanks for your business!"
        name="notes"
        rows="1"
        className="my-2 form-control w-full"
      ></textarea>
    </>
  );
};
export default Footer;
