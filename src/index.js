import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

const rootEl = document.getElementById('root');
if (rootEl.hasChildNodes()) {
  hydrate(<App />);
} else {
  render(<App />);
}

reportWebVitals(sendToVercelAnalytics);
