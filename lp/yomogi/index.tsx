import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pre-rendered HTML exists → hydrate (reuse DOM, attach events)
// Otherwise → full client render (dev mode)
if (rootElement.childElementCount > 0) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
