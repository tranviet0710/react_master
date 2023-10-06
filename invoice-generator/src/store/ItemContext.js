import { createContext, useState } from "react";

const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, { name: "", qty: 0, price: 0 }]);
  };
  const deleteItem = (key) => {
    console.log(key);
    setItems(items.filter((item, index) => index !== key));
  };
  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};
export default ItemContext;
