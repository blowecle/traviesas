import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <div className='app'>
        <Router/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);