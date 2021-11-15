import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
    {id : 1, task : "sucuk", isCompleted : false },
    {id : 2, task : "sucdaaduk", isCompleted : false },
    {id : 3, task : "sucfffnnnnuk", isCompleted : false }
];

ReactDOM.render(
  <React.StrictMode>
    <App todo={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();