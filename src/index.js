import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {id: "shop-0", name: "bread", completed: true},
  {id: "shop-1", name: "milk", completed: false},
  {id: "shop-2", name: "eggs", completed: false},
];

ReactDOM.render(<App items={DATA} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
