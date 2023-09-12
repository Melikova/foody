import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css'
import 'assets/styles/reset.css'
import 'assets/styles/global.css'
import { store } from 'redux/app/store'
import { Provider } from 'react-redux'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
