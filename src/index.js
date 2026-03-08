import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; 
// import "https://smtpjs.com/v3/smtp.js";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
    <ScrollToTop />
    <App />
    </BrowserRouter> 
  </React.StrictMode>
);


  