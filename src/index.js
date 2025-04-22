import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';   // <-- Add this
import store from './redux/store';           // <-- Import your Redux store
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>          {/* <-- Wrap App inside Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
