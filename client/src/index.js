import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux";
import {store ,persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


