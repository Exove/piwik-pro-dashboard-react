import React from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'

const container =
  document.getElementById('piwik-dashboard-app') ||
  document.getElementById('root');

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
