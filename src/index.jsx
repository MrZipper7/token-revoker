import React from 'react';
import ReactDOM from 'react-dom/client';

import { ModalProvider } from './context/ModalContext';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
