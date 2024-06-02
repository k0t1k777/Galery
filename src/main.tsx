import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.js';
import './index.css';
import { store } from './store/features/slice/slice.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
