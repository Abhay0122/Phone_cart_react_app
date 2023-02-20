import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore} from "redux"
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/rootreducer";
const store = createStore(rootReducer);
console.warn(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  </Provider>
);

