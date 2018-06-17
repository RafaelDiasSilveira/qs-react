import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';

import AppRouter from './routes/AppRouter';

const root = document.getElementById('app');

const jsx = (
  <div>
    <AppRouter />
  </div>
);

ReactDOM.render(jsx, root);

