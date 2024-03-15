import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);

  const [cartBtnInfo, setCartBtnInfo] = useState({});

  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
  };

  const toggleCartDrawer = () => setCartDrawer(!cartDrawer);

  return (
    <DataContext.Provider
      value={{
        toggleCartDrawer,
        cartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
