import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Version & Debug Info
const BUILD_TIME = new Date().toISOString();
const APP_VERSION = `1.0.${Date.now()}`;

console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #0ea5e9');
console.log('%c🏥 MedSub CRM - Vitali Edition', 'color: #0ea5e9; font-size: 18px; font-weight: bold');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #0ea5e9');
console.log('%c📦 Version:', 'color: #0284c7; font-weight: bold', APP_VERSION);
console.log('%c🕐 Build Time:', 'color: #0284c7; font-weight: bold', BUILD_TIME);
console.log('%c🌐 Base URL:', 'color: #0284c7; font-weight: bold', import.meta.env.BASE_URL);
console.log('%c🔧 Mode:', 'color: #0284c7; font-weight: bold', import.meta.env.MODE);
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #0ea5e9');

// Cleanup: Unregister any existing service workers that might be causing errors
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
      registration.unregister();
      console.log('🧹 Service Worker unregistered:', registration);
    }
  }).catch(err => console.log('⚠️ Service Worker cleanup error:', err));
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);