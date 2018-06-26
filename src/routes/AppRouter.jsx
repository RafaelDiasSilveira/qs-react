import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Header from '../template/Header';
import Bookcase from '../bookcase/Bookcase';

import AddBookPage from '../book/AddBookPage';
import AddUserPage from '../user/AddUserPage';

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
                path="/bookcase"
                component={Bookcase}
                exact
              />

              <Route
                path="/user/new"
                component={AddUserPage}
                exact
              />

              <PrivateRoute
                path="/book/new"
                component={AddBookPage}
              />

              <Route component={Bookcase} />
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
            pathname: '/user/new',
          }}
        />
      ))
    }
  />
);

export default AppRouter;
