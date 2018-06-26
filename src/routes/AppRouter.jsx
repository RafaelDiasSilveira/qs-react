import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Header from '../template/Header';
import Bookcase from '../bookcase/Bookcase';

import AddBookPage from '../book/AddBookPage';
import AddUserPage from '../user/AddUserPage';
import LoginPage from '../user/LoginPage';

import { currentUser } from '../utils/auth';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col" >

            <Switch>
              <Route
                path="/user/new"
                component={AddUserPage}
                exact
              />

              <Route
                path="/login"
                component={LoginPage}
                exact
              />

              <PrivateRoute
                path="/bookcase"
                component={Bookcase}
                exact
              />

              <PrivateRoute
                path="/book/new"
                component={AddBookPage}
              />

              <PrivateRoute component={Bookcase} />
            </Switch>

          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

/* eslint-disable react/prop-types */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (currentUser() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))
    }
  />
);

export default AppRouter;
