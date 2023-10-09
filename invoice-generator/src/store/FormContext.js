import { createContext, useState } from "react";
function getCurrentDateFormatted() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Note: Month is zero-based
  const year = currentDate.getFullYear();

  return `${month}/${day}/${year}`;
}
const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [invoiceInfo, setInvoiceInfo] = useState({
    currentDate: getCurrentDateFormatted(),
    dueDate: "",
    number: 0,
  });
  const [billTo, setBillTo] = useState({
    who: "",
    email: "",
    address: "",
  });
  const [billFrom, setBillFrom] = useState({
    who: "",
    email: "",
    address: "",
  });
  const updateInvoiceInfo = (key, value) => {
    setInvoiceInfo({
      ...invoiceInfo,
      [key]: value,
    });
  };
  const updateBillFrom = (key, value) => {
    setBillFrom({
      ...billFrom,
      [key]: value,
    });
  };
  const updateBillTo = (key, value) => {
    setBillTo({
      ...billTo,
      [key]: value,
    });
  };
  return (
    <FormContext.Provider
      value={{
        invoiceInfo,
        updateInvoiceInfo,
        billTo,
        updateBillTo,
        billFrom,
        updateBillFrom,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContext;
