import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';
import { addUser } from './user/UserAction';

const root = document.getElementById('app');

const store = configStore();

const admin = {
  nome: 'admin',
  apelido: 'admin',
  telefone: 'admin',
  senha: 'admin',
};

store.dispatch(addUser(admin));

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

ReactDOM.render(jsx, root);

