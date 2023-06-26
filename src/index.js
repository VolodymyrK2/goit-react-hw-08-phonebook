import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import  App  from 'components/App';
import './index.css';
import {store, persistor} from './redux/store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          
            <App />
          
          </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
