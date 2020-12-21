import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './Stores/Reducers/rootReducers'
import axios from 'axios'

const store = createStore(rootReducers, applyMiddleware(thunk))

const reqInterceptor = axios.interceptors.request.use(req => {
  console.log("request -->", req)
  return req
}, error => {
  console.log("error in request -->", error)

});

const resInterceptor = axios.interceptors.response.use(response => {
  console.log("response -->", response)
  return response
}, error => {
  console.log("error in  response", error)
});

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
