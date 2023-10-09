import "./App.css";
import Button from "./components/Button";
import Currency from "./components/Currency";
import Rate from "./components/Rate";
import Devision from "./components/Devision";
import InvoiceInfo from "./components/Header";
import Bill from "./components/Bill";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import FormContext from "./store/FormContext";
function App() {
  const [showModal, setShowModal] = useState(false);
  const { billTo, updateBillTo, billFrom, updateBillFrom } =
    useContext(FormContext);
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
  };
  return (
    <div className="App flex flex-col items-center justify-center w-full text-black">
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
        <div className="col-span-2 mt-10">
          <Button onClick={displayModal}> Review Invoice </Button>
          <Devision />
          <Currency />
          <Rate text="Tax rate" />
          <Rate text="Discount rate" />
        </div>
        {showModal ? (
          <>
            <Modal setShowModal={setShowModal} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
