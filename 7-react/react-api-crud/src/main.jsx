import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContextProvider from "./contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

// console.dir(Array);
// console.log(React);
// console.log(ReactDOM);

// console.log(Array.from({ length: 5 }, (_, index) => index));
