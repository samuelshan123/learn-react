import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactEvents from './ReactEvents';
import ApiCall from './ApiCall';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navigate from './Navigate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <ReactEvents name="Samuel" /> */}
    {/* <ApiCall/> */}
    <Routes>
        <Route path="/" element={<ApiCall />} />
        <Route path="navigate" element={<Navigate />} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
