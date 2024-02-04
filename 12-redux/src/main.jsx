import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/Store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
