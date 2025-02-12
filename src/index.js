import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import './fonts/Vazirmatn.ttf';

const store=createStore(reducer)

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,document.getElementById("root"))


