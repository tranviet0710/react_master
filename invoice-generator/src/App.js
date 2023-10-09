import "./App.css";
import Button from "./components/Button";
import Currency from "./components/Currency";
import Rate from "./components/Rate";
import Devision from "./components/Devision";
import InvoiceInfo from "./components/Header";
import Bill from "./components/Bill";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import FormContext from "./store/FormContext";
function App() {
  const [showModal, setShowModal] = useState(false);
  const { billTo, updateBillTo, billFrom, updateBillFrom, items, invoiceInfo } =
    useContext(FormContext);
  const isAllFieldsValidated = () => {
    return (
      billTo.who !== "" &&
      billTo.email !== "" &&
      billTo.address !== "" &&
      billFrom.who !== "" &&
      billFrom.email !== "" &&
      billFrom.address !== "" &&
      invoiceInfo.dueDate !== "" &&
      invoiceInfo.number !== 0
    );
  };
  const displayModal = (event) => {
    event.preventDefault();
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.click((e) => {
      e.preventDefault();
    });
    if (isAllFieldsValidated()) {
      setShowModal(true);
    }
  };
  return (
    <div
      className="App flex flex-col items-center justify-center w-full text-black"
      id=""
    >
      <div className="container grid grid-cols-8 gap-4">
        <div className="col-span-6 border rounded-3xl bg-white p-10">
          <form id="form">
            <InvoiceInfo />
            <Devision />
            <div className="grid grid-cols-10 gap-4">
              <Bill
                name="Bill to: "
                who="Who is this invoice to?"
                bill={billTo}
                updateBill={updateBillTo}
              />
              <Bill
                name="Bill from: "
                who="Who is this invoice from?"
                bill={billFrom}
                updateBill={updateBillFrom}
              />
            </div>
            <button
              id="submit-btn"
              type="submit"
              style={{ display: "none" }}
            ></button>
          </form>
          <Devision />
          <Items />
          <Devision />
          <Footer />
        </div>
        <div className="col-span-2 h-full ">
          <div className="sticky top-10 ">
            <Button onClick={displayModal}> Review Invoice </Button>
            <Devision />
            <Currency />
            <Rate name="tax" text="Tax rate" />
            <Rate name="discount" text="Discount rate" />
          </div>
        </div>
        {showModal ? (
          <>
            <Modal setShowModal={setShowModal} items={items} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
