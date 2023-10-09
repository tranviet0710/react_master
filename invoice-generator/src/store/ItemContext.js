import { createContext, useState } from "react";

const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [currency, setCurrency] = useState();
  const [tax, setTax] = useState();
  const [discount, setDiscount] = useState();
  const addItem = () => {
    setItems([...items, { name: "", qty: 0, price: 0 }]);
  };
  const deleteItem = (key) => {
    setItems(items.filter((item, index) => index !== key));
  };
  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        deleteItem,
        currency,
        setCurrency,
        tax,
        setTax,
        discount,
        setDiscount,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
export default ItemContext;
