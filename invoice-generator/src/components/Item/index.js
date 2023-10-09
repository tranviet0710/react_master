import { useContext } from "react";
import ItemContext from "../../store/ItemContext";
const Item = (props) => {
  const { deleteItem, updateItem } = useContext(ItemContext);

  return (
    <>
      <tr className={`border-b `}>
        <td className="w-full pt-2">
          <input
            value={props.name}
            name="name"
            required
            placeholder="Item name"
            className="bg-gray-50 w-full p-2 mb-3"
            onChange={(event) => {
              updateItem(props.id, event.target.name, event.target.value);
            }}
          ></input>
          <input
            value={props.desc}
            name="desc"
            required
            placeholder="Item description"
            className="bg-gray-50 w-full p-2 mb-3"
            onChange={(event) =>
              updateItem(props.id, event.target.name, event.target.value)
            }
          ></input>
        </td>
        <td className="pt-2" style={{ minWidth: "70px" }} valign="top">
          <div>
            <input
              value={props.qty}
              type="number"
              placeholder="1"
              min={1}
              max={100}
              step={1}
              className="w-full p-2 text-black bg-gray-50 "
              name="qty"
              onChange={(event) => {
                updateItem(props.id, event.target.name, event.target.value);
              }}
            ></input>
          </div>
        </td>
        <td className="pt-2" style={{ minWidth: "130px" }} valign="top">
          <div className={`flex items-center`}>
            <span className="border-2 rounded-full w-5 h-5 border-black	flex items-center justify-center">
              $
            </span>
            <input
              name="price"
              value={parseFloat(props.price).toFixed(2)}
              type="number"
              placeholder="1.00"
              min="0.00"
              step="0.01"
              max="100.00"
              className="p-2 text-black bg-gray-50"
              onChange={(event) => {
                updateItem(props.id, event.target.name, event.target.value);
              }}
            ></input>
          </div>
        </td>
        <td className="pt-2" valign="top">
          <button
            className="bg-red-600 rounded-lg justify-center flex"
            onClick={() => deleteItem(props.id)}
          >
            <svg
              stroke=""
              fill="white"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-white btn btn-danger"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: 33, width: 33, padding: "7.5px" }}
            >
              <path
                fill="none"
                d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
              />
              <path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z" />
              <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z" />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};
export default Item;
