import React from "react";
import { DetailProductPage, HomePage } from "./page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
