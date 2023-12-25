import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.99 },
    { id: 3, name: "Orange", price: 2.49 },
    { id: 4, name: "Grapes", price: 3.99 },
  ]);

  const addProduct = (newProduct) => setProduct([...products, newProduct]);

  const [records, setRecord] = useState([]);

  const addRecord = (newRecord) => {
    const isExitedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );

    if (isExitedRecord) {
      updateQuantity(isExitedRecord.id, newRecord.quantity);
    } else {
      setRecord([...records, newRecord]);
    }
  };

  const removeRecord = (id) =>
    setRecord(records.filter((record) => record.id != id));

  const updateQuantity = (id, Quantity) => {
    setRecord(
      records.map((record) => {
        if (record.id === id) {
          const newQuantity = record.quantity + Quantity;
          const newCost = newQuantity * record.price;
          return { ...record, quantity: newQuantity, cost: newCost };
        } else {
          return { ...record };
        }
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addProduct,
        records,
        addRecord,
        removeRecord,
        updateQuantity,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
