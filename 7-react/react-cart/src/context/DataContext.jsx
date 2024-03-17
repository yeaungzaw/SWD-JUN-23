import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);

  const [cartBtnInfo, setCartBtnInfo] = useState({});
  const [input, setInput] = useState("");

  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
  };

  const removeCart = (id) => {
    setCarts(carts.filter((cart) => cart.product_id != id));
  };

  const handleIncrement = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.product_id === id) {
          const newQuantity = cart.quantity + 1;
          return {
            ...cart,
            quantity: newQuantity,
            cost: newQuantity * cart.price,
          };
        } else {
          return cart;
        }
      })
    );
  };

  const handleDecrement = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.product_id === id) {
          const newQuantity = cart.quantity - 1;
          return {
            ...cart,
            quantity: newQuantity,
            cost: newQuantity * cart.price,
          };
        } else {
          return cart;
        }
      })
    );
  };

  const toggleCartDrawer = () => setCartDrawer(!cartDrawer);

  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <DataContext.Provider
      value={{
        toggleCartDrawer,
        cartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
        currentCategory,
        setCurrentCategory,
        removeCart,
        handleIncrement,
        handleDecrement,
        input,
        setInput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
