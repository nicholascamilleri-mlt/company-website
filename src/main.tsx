import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

const initialBranding = typeof window !== 'undefined' ? window.__BRANDING__ ?? null : null;
if (typeof window !== 'undefined') {
  delete window.__BRANDING__;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App initialBranding={initialBranding} />
    </BrowserRouter>
  </React.StrictMode>
);
