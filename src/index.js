/* Imported React */
import React from 'react';
/* Connects React and the DOM */
import ReactDOM from 'react-dom';
/* Imported CSS Styling Sheet */
import './index.css';
/* Imported App Component */
import App from './App';
/* Imported Route Configuration of Components */
import { BrowserRouter } from 'react-router-dom';

/* Renders React Elements to the DOM  */
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


