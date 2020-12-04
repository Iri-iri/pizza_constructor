import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import './index.css';
import Ingredients from './components/Ingredients';


ReactDOM.render(
  <Provider store={store}>
    <Ingredients />
  </Provider>,
  document.getElementById('root')
);

