import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom" 
import DataContextComponent, { DataContext } from './context/contextdata';
import ModeContextComponent from './context/ModeContext';
import AlertcontextComponent from './context/AlertContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextComponent>
    <ModeContextComponent>
      <AlertcontextComponent>
   <BrowserRouter>
    <App />
   </BrowserRouter>
   </AlertcontextComponent>
   </ModeContextComponent>
  </DataContextComponent>
);

