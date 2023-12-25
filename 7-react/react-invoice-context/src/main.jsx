import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GeneralContextProvider from "./contexts/GeneralContext";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
