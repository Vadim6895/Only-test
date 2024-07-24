import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

const rootEl = document.querySelector('#root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
