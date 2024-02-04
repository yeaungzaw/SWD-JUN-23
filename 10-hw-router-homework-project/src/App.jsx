import React from "react";
import { DetailProductPage, HomePage } from "./page";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
