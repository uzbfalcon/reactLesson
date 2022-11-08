import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetName from './CTRL.jsx'
// import Houses from './houses.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GetName />
  </React.StrictMode>
);



