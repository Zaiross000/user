import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Component
import App from "./App";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import { store } from "./StoreRedux/store";
import UserList from "./Component/UserList";
import PrivateRouter from "./Component/PrivateRouter";
import UserPrivate from "./Component/UserPrivate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />}></Route>
            <Route element={<PrivateRouter />}>
              <Route path="user" element={<UserList />}></Route>
              <Route path="user/:id" element={<UserPrivate />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
