import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './lesson_files/intro';
import Dom from './lesson_files/dom_manipulation';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('intro'));
root.render(
  <React.StrictMode>
    <Intro />
  </React.StrictMode>
);
const dom = ReactDOM.createRoot(document.getElementById('dom'));
dom.render(
  <React.StrictMode>
    <Dom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
