import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
);
