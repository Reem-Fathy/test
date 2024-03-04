import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CounterContextProvider from './Context/Counter';
import TokenContextProvider from './Context/Token';
import cartContextProvider from './Context/cartContext';

import './index.css';
import App from './App';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast, { Toaster } from 'react-hot-toast';
import { Offline, Online } from "react-detect-offline";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  <cartContextProvider>

  <Offline>
    <div className='offline'>
     <i className='fa-solid fa-wifi'></i> Sorry You Now Offline</div></Offline>
  
  <React.StrictMode>
    <CounterContextProvider>
      <TokenContextProvider>
        <App />
      </TokenContextProvider>

    </CounterContextProvider>
    <Toaster />
  </React.StrictMode>
  </cartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
