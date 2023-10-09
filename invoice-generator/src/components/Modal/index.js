import React, { useContext, useEffect } from "react";
import FormContext from "../../store/FormContext";
import ItemContext from "../../store/ItemContext";
import generatePDF from "react-to-pdf";
import { roundNumber } from "../../utils/Utils";
const getTargetElement = () => document.getElementById("invoiceCapture");

export default function Modal(props) {
  const { billTo, billFrom, invoiceInfo, selectedCurrency } =
    useContext(FormContext);
  const { items, money } = useContext(ItemContext);
  const printPdf = (event) => {
    event.preventDefault();
    generatePDF(getTargetElement);
  };
  return (
    <div>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={(event) => {
          props.setShowModal();
        }}
      >
        {/*content*/}
        <div
          //do not close modal if anything inside modal content is clicked
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="border-0 rounded-3xl shadow-lg relative w-[800px] flex flex-col bg-white outline-none focus:outline-none "
        >
          <div id="invoiceCapture">
            <div className="rounded-t-3xl flex flex-row justify-between items-start bg-[rgb(248,249,250)] w-100 p-4">
              <div className="w-100">
                <h4 className="font-bold mb-2 text-3xl">{billFrom.who}</h4>
                <h6 className="font-bold text-secondary ">
                  Invoice #: {invoiceInfo.number}
                </h6>
              </div>
              <div className="text-end ms-4">
                <h6 className="font-bold mt-1 mb-2 text-xl">
                  Amount&nbsp;Due:
                </h6>
                <h5 className="font-bold text-secondary"> £ {money.total}</h5>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4 grid grid-cols-12">
                <div className="col-span-4">
                  <div className="font-bold">Billed to:</div>
                  <div>{billTo.who}</div>
                  <div>{billTo.address}</div>
                  <div>{billTo.email}</div>
                </div>
                <div className="col-span-4">
                  <div className="font-bold">Billed From:</div>
                  <div>{billFrom.who}</div>
                  <div>{billFrom.address}</div>
                  <div>{billFrom.email}</div>
                </div>
                <div className="col-span-4">
                  <div className="font-bold mt-2">Date Of Issue:</div>
                  <div>{invoiceInfo.dueDate}</div>
                </div>
              </div>
              <table className="mb-0 table w-full">
                <thead>
                  <tr className="border-b border-t">
                    <th className="text-start py-2">QTY</th>
                    <th className="text-start">DESCRIPTION</th>
                    <th className="text-end">PRICE</th>
                    <th className="text-end">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.name} className="border-b">
                      <td style={{ width: 70 }} className="py-2">
                        {item.qty}
                      </td>
                      <td>{item.name}</td>
                      <td className="text-end" style={{ width: 100 }}>
                        {selectedCurrency} {item.price}
                      </td>
                      <td className="text-end" style={{ width: 100 }}>
                        {selectedCurrency} {roundNumber(item.price * item.qty)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="w-full">
                <tbody className="w-full">
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="text-end border-b">
                    <td />
                    <td
                      className="text-start font-bold py-2"
                      style={{ width: 100 }}
                    >
                      SUBTOTAL
                    </td>
                    <td className="text-end" style={{ width: 100 }}>
                      {selectedCurrency} {money?.subTotal}
                    </td>
                  </tr>
                  <tr className="text-end border-b">
                    <td />
                    <td
                      className="text-start font-bold py-2"
                      style={{ width: 100 }}
                    >
                      TAX
                    </td>
                    <td className="text-end" style={{ width: 100 }}>
                      {selectedCurrency} {money?.tax}
                    </td>
                  </tr>
                  <tr className="text-end border-b">
                    <td />
                    <td
                      className="text-start font-bold py-2"
                      style={{ width: 100 }}
                    >
                      DISCOUNT
                    </td>
                    <td className="text-end" style={{ width: 100 }}>
                      {selectedCurrency} {money?.discount}
                    </td>
                  </tr>
                  <tr className="text-end border-b ">
                    <td />
                    <td
                      className="text-start font-bold py-2"
                      style={{ width: 100 }}
                    >
                      TOTAL
                    </td>
                    <td className="text-end" style={{ width: 100 }}>
                      {selectedCurrency} {money?.total}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-[rgb(248,249,250)] py-3 px-4 rounded mt-10">
                {invoiceInfo.note}
              </div>
            </div>
          </div>
          <div className="pb-4 px-4">
            <div className="grid grid-cols-12">
              <div className="col-span-6 flex justify-center bg-[#0d6efd] rounded-full">
                <button
                  type="button"
                  className="p-3 w-100 text-white flex items-center"
                  onClick={printPdf}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="me-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: 15, height: 15, marginTop: "-3px" }}
                  >
                    <path d="M20.563,3.34c-0.292-0.199-0.667-0.229-0.989-0.079l-17,8C2.219,11.429,1.995,11.788,2,12.18 c0.006,0.392,0.24,0.745,0.6,0.902L8,15.445v6.722l5.836-4.168l4.764,2.084c0.128,0.057,0.265,0.084,0.4,0.084 c0.181,0,0.36-0.049,0.52-0.146c0.278-0.169,0.457-0.463,0.479-0.788l1-15C21.021,3.879,20.856,3.54,20.563,3.34z M18.097,17.68 l-5.269-2.306L16,9.167l-7.649,4.25l-2.932-1.283L18.89,5.794L18.097,17.68z" />
                  </svg>
                  Send Invoice
                </button>
              </div>
              <div className="col-span-6 flex justify-center rounded-full border-2 border-blue-500">
                <button
                  type="button"
                  className="p-3 w-100 rounded-full text-blue-400 flex items-center"
                  onClick={printPdf}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="me-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: 16, height: 16, marginTop: "-3px" }}
                  >
                    <path d="M18.948,11.112C18.511,7.67,15.563,5,12.004,5c-2.756,0-5.15,1.611-6.243,4.15C3.613,9.792,2.004,11.82,2.004,14 c0,2.757,2.243,5,5,5h1v-2h-1c-1.654,0-3-1.346-3-3c0-1.404,1.199-2.757,2.673-3.016l0.581-0.102l0.192-0.558 C8.153,8.273,9.898,7,12.004,7c2.757,0,5,2.243,5,5v1h1c1.103,0,2,0.897,2,2c0,1.103-0.897,2-2,2h-2v2h2c2.206,0,4-1.794,4-4 C22.004,13.119,20.699,11.538,18.948,11.112z" />
                    <path d="M13.004 14L13.004 10 11.004 10 11.004 14 8.004 14 12.004 19 16.004 14z" />
                  </svg>
                  Download Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
