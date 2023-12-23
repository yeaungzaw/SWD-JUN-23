import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.99 },
    { id: 3, name: "Orange", price: 2.49 },
    { id: 4, name: "Grapes", price: 3.99 },
  ]);

  const [records, setRecord] = useState([]);

  const addRecord = (newRecord) => setRecord([...records, newRecord]);

  const removeRecord = (id) =>
    setRecord(records.filter((record) => record.id != id));

  const addProduct = (newProduct) => setProduct([...products, newProduct]);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm products={products} addRecord={addRecord} />
      <RecordTable records={records} removeRecord={removeRecord} />
      <Footer handleDrawer={handleDrawer} />
      <ProductDrawer
        openDrawer={openDrawer}
        handleDrawer={handleDrawer}
        products={products}
        addProduct={addProduct}
      />
    </div>
  );
};

export default App;
