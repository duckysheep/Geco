import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./Session 10/AppSession10";
// import App from "./Session 11/AppSession11";
// import App from "./Session 12/App";
// import App from "./Session 13/App";
// import App from "./Session 14/App";
import App from "./Project App Sample/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
