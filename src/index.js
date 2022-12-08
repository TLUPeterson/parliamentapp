import * as  React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";



//import rootReducer from 'store/reducers/rootReducer'
import App from './App'
import playerreducer from './store/allreducers'
import './index.css';
import 'antd/dist/antd.min.css';

const store = configureStore({ reducer: playerreducer })
store.subscribe(() => console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </React.StrictMode>
  </Provider>
)