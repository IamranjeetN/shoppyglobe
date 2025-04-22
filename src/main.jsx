import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";  // <-- Import Provider
import store from './redux/store';             // <-- Your Redux store
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* <-- Wrap App inside Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
