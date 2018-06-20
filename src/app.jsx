import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';

const root = document.getElementById('app');

const store = configStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

ReactDOM.render(jsx, root);

