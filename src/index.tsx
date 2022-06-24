import { hydrate, render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl?.hasChildNodes()) {
  hydrate(<App />, rootEl);
} else {
  render(<App />, rootEl);
}

reportWebVitals();
