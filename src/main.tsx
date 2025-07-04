// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ModeProvider } from './context/Mode.tsx'; // Import

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModeProvider> {/* Wrap App with the provider */}
      <App />
    </ModeProvider>
  </React.StrictMode>,
);