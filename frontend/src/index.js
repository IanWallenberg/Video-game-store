import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider
    store={store}
    >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// The <Provider> component makes the Redux 
// store available to any nested components that 
// need to access the Redux store.




reportWebVitals();
