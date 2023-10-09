import { createContext, useState } from "react";

const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      name: "",
      desc: "",
      qty: 1,
      price: 1.0,
    },
  ]);
  const [currency, setCurrency] = useState();
  const [tax, setTax] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [money, setMoney] = useState({
    subTotal: 0.0,
    tax: 0.0,
    discount: 0.0,
    total: 0.0,
  });

  const updateMoney = (money) => {
    setMoney(money);
  };

  const updateItem = (itemId, key, value) => {
    setItems(
      items.map((item, index) =>
        index === itemId ? { ...item, [key]: value } : item
      )
    );
  };
  const addItem = () => {
    setItems([...items, { name: "", desc: "", qty: 1, price: 1.0 }]);
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
        updateItem,
        money,
        updateMoney,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
export default ItemContext;
