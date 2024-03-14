import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContextProvider from "./contexts/DataContext.jsx";
import axios from "axios";
import { baseUrl } from "./config/config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

// console.dir(Array);
// console.log(React);
// console.log(ReactDOM);

// console.log(Array.from({ length: 5 }, (_, index) => index));

// console.dir(axios);

// axios.get(baseUrl + "/courses").then((res) => {
//   console.log(res);
// });

// const getCourse = async () => {
//   const res = await axios.get(baseUrl + "/courses");
//   console.log(res.data);
//   console.log(res.status);
// };

// getCourse();
