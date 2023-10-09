import { createContext, useState } from "react";
import { getCurrentDateFormatted } from "../utils/Utils";

const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [invoiceInfo, setInvoiceInfo] = useState({
    currentDate: getCurrentDateFormatted(),
    dueDate: "",
    number: 0,
    note: "",
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
        selectedCurrency,
        setSelectedCurrency,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContext;
